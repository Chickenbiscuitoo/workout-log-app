const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

// @route    POST api/users
// @desc     Register user
// @access   Public
const registerUser = async (req, res) => {
	try {
		const { name, email, password } = req.body

		if (!name || !email || !password) {
			return res
				.status(400)
				.json({ message: 'Please add all fields' })
		}

		// Check if user exists
		const userExists = await User.findOne({ email })

		if (userExists) {
			return res.status(400).json({ message: 'User already exists' })
		}

		// Hash password
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(password, salt)

		// Create user
		const user = await User.create({
			name,
			email,
			password: hashedPassword,
		})

		if (user) {
			return res.status(201).json({
				_id: user.id,
				name: user.name,
				email: user.email,
				token: generateToken(user._id),
			})
		} else {
			return res.status(400).json({ message: 'Invalid User Data' })
		}
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: 'Server Error' })
	}
}

// @route    POST api/users/login
// @desc     Login user
// @access   Public
const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body

		// Check for user email
		const user = await User.findOne({ email })

		if (user && (await bcrypt.compare(password, user.password))) {
			res.json({
				_id: user.id,
				name: user.name,
				email: user.email,
				token: generateToken(user._id),
			})
		} else {
			return res.status(400).json({ message: 'Invalid Credentials' })
		}
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: 'Server Error' })
	}
}

// @route   GET /api/users/me
// @desc    Get user data
// @access  Private
const getMe = async (req, res) => {
	try {
		return res.status(200).json(req.user)
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: 'Server Error' })
	}
}

// Generate JWT
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	})
}

module.exports = {
	registerUser,
	loginUser,
	getMe,
}
