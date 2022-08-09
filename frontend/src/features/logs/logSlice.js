import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import logService from './logService'

const initialState = {
	logs: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
}

// Get users logs
export const getAllLogs = createAsyncThunk(
	'logs/getAll',
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await logService.getAllLogs(token)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Get users logs from PREV week
export const getPrevLogs = createAsyncThunk(
	'logs/getPrev',
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await logService.getPrevLogs(token)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Get users logs from THIS week
export const getCurrentLogs = createAsyncThunk(
	'logs/getCurrent',
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await logService.getCurrentLogs(token)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Create log
export const createLog = createAsyncThunk(
	'logs/create',
	async (logData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await logService.createLog(logData, token)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Update log
export const updateLog = createAsyncThunk(
	'logs/update',
	async (logData, id, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await logService.updateLog(logData, id, token)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Delete log
export const deleteLog = createAsyncThunk(
	'logs/delete',
	async (id, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await logService.deleteLog(id, token)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const logSlice = createSlice({
	name: 'log',
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllLogs.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getAllLogs.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.logs = action.payload
			})
			.addCase(getAllLogs.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(getPrevLogs.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getPrevLogs.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.logs = action.payload
			})
			.addCase(getPrevLogs.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(getCurrentLogs.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getCurrentLogs.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.logs = action.payload
			})
			.addCase(getCurrentLogs.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(createLog.pending, (state) => {
				state.isLoading = true
			})
			.addCase(createLog.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.logs.push(action.payload)
			})
			.addCase(createLog.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(updateLog.pending, (state) => {
				state.isLoading = true
			})
			.addCase(updateLog.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.logs.push(action.payload)
			})
			.addCase(updateLog.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(deleteLog.pending, (state) => {
				state.isLoading = true
			})
			.addCase(deleteLog.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.logs = state.logs.filter(
					(log) => log._id !== action.payload.id
				)
			})
			.addCase(deleteLog.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
	},
})

export const { reset } = logSlice.actions
export default logSlice.reducer
