const express = require('express')
const router = express.Router()

const auth = require('../../middleware/auth')

// Controllers
const {
	getLogs,
	createLog,
	updateLog,
	deleteLog,
	getThisWeekLogs,
	getPrevWeekLogs,
} = require('../../controllers/logController')

// @route   GET api/logs
// @desc    Get users logs
// @access  Private
router.get('/', auth, getLogs)

// @route   GET api/logs/prev-week
// @desc    Get users logs from PREVIOUS week
// @access  Private
router.get('/prev-week', auth, getPrevWeekLogs)

// @route   GET api/logs/this-week
// @desc    Get users logs from THIS week
// @access  Private
router.get('/this-week', auth, getThisWeekLogs)

// @route   POST api/logs
// @desc    Create log
// @access  Private
router.post('/', auth, createLog)

// @route   PUT api/logs/:logId
// @desc    Update log
// @access  Private
router.put('/:logId', auth, updateLog)

// @route   DELETE api/logs/:logId
// @desc    Delete log
// @access  Private
router.delete('/:logId', auth, deleteLog)

module.exports = router
