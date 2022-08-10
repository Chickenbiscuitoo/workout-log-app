const { check, validationResult } = require('express-validator')
const startOfWeek = require('date-fns/startOfWeek')
const endOfWeek = require('date-fns/endOfWeek')
const sub = require('date-fns/sub')

const Log = require('../models/Log')
const User = require('../models/User')

// @route   GET api/logs
// @desc    Get users logs
// @access  Private
const getLogs = async (req, res) => {
	try {
		const user = await User.findById(req.user.id).populate('logs')

		res.json(user.logs)
	} catch (error) {
		console.log(error.message)
		res.status(500).send('Server Error')
	}
}

// @route   POST api/logs
// @desc    Create log
// @access  Private
const createLog = async (req, res) => {
	try {
		const log = await Log.create({
			host: req.user.id,
			exercise: req.body.exercise,
			sets: req.body.sets,
		})

		await User.findByIdAndUpdate(req.user.id, {
			$push: { logs: log.id },
		})

		return res.json(log)
	} catch (error) {
		console.log(error.message)
		return res.status(500).send('Server Error')
	}
}

// @route   PUT api/logs/:logId
// @desc    Update log
// @access  Private
const updateLog = async (req, res) => {
	try {
		const log = await Log.findByIdAndUpdate(
			req.params.logId,
			{
				$push: {
					sets: req.body,
				},
			},
			{ new: true }
		)
		return res.json(log)
	} catch (err) {
		console.log(error.message)
		return res.status(500).json({ message: error.message })
	}
}

// @route   DELETE api/logs/:logId
// @desc    Delete log
// @access  Private
const deleteLog = async (req, res) => {
	try {
		const log = await Log.findByIdAndRemove(req.params.logId)
		res.status(200).json(log.id)
	} catch (error) {
		console.log(error.message)
		return res.status(401).json({ message: 'Bad requst' })
	}
}

// @route   GET api/logs/this-week
// @desc    Get users logs from THIS week
// @access  Private
const getThisWeekLogs = async (req, res) => {
	try {
		const logs = await Log.find({
			host: req.user.id,
			createdAt: {
				$gte: startOfWeek(new Date()),
				$lte: endOfWeek(new Date()),
			},
		})

		res.status(200).json(logs)
	} catch (error) {
		console.log(error)
		return res.status(401).send('Bad request')
	}
}

// @route   GET api/logs/prev-week
// @desc    Get users logs from PREVIOUS week
// @access  Private
const getPrevWeekLogs = async (req, res) => {
	try {
		const logs = await Log.find({
			host: req.user.id,
			createdAt: {
				$gte: startOfWeek(sub(new Date(), { weeks: 1 })),
				$lte: endOfWeek(sub(new Date(), { weeks: 1 })),
			},
		})

		res.status(200).json(logs)
	} catch (error) {
		console.log(error)
		return res.status(401).send('Bad request')
	}
}

module.exports = {
	getLogs,
	createLog,
	updateLog,
	deleteLog,
	getThisWeekLogs,
	getPrevWeekLogs,
}
