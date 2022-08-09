import axios from 'axios'

const API_URL = 'http://localhost:5000/api/logs/'

// Get users logs
const getAllLogs = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	const response = await axios.get(API_URL, config)

	return response.data
}

// Get users logs from PREV week
const getPrevLogs = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	const response = await axios.get(API_URL + 'prev-week', config)

	return response.data
}

// Get users logs from THIS week
const getCurrentLogs = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	const response = await axios.get(API_URL + 'this-week', config)

	return response.data
}

// Create log
const createLog = async (logData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	const response = await axios.post(API_URL, logData, config)

	return response.data
}

// Update Log
const updateLog = async (logData, logId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	const response = await axios.put(API_URL + logId, logData, config)

	return response.data
}

// Delete Log
const deleteLog = async (logId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	const response = await axios.delete(API_URL + logId, config)

	return response.data
}

const logService = {
	getAllLogs,
	getPrevLogs,
	getCurrentLogs,
	createLog,
	updateLog,
	deleteLog,
}

export default logService
