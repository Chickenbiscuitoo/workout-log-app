import axios from 'axios'

const API_URL = '/api'

// Register user
const register = async (userData) => {
	const response = await axios.post(`${API_URL}/user`, userData)

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data))
	}

	return response.data
}

// Login User
const login = async (userData) => {
	const response = await axios.post(`${API_URL}/auth`, userData)

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data))
	}

	return response.data
}

// Logout user
const logout = () => {
	localStorage.removeItem('user')
}

const authService = {
	register,
	logout,
	login,
}

export default authService
