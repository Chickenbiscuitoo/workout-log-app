const express = require('express')
const router = express.Router()
const {
	registerUser,
	loginUser,
	getMe,
} = require('../../controllers/userController')
const auth = require('../../middleware/auth')

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post('/', registerUser)

// @route    POST api/users/login
// @desc     Login user
// @access   Public
router.post('/login', loginUser)

// @route   GET /api/users/me
// @desc    Get user data
// @access  Private
router.get('/me', auth, getMe)

module.exports = router
