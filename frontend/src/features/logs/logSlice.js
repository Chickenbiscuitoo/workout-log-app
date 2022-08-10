import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import logService from './logService'

const initialState = {
	logs: [],
	prevLogs: [],
	currentLogs: [],
	exercises: [
		'Back Squat',
		'Pause Squat',
		'Front Squat',
		'Box Squat',
		'Barbell Split Squat',
		'The Goblet Squat',
		'Front Rack Reverse Lunge',
		'Bulgarian Split Squat',
		'Conventional Deadlift',
		'Sumo Deadlift',
		'Romanian Deadlift',
		'Trap Bar Deadlift',
		'Goodmorning',
		'Dumbbell RDL',
		'Back Raise',
		'Cable Pull Through',
		'Barbell Row',
		'Pull-ups',
		'Chin-ups',
		'Lat Pulldowns',
		'Seated Cable Rows',
		'Dumbbell Rows',
		'Face Pulls',
		'Chest Supported Rows',
		'Bench Press',
		'Incline Bench Press',
		'Overhead Press',
		'Dumbbell Press',
		'Dumbbell Incline Press',
		'Push-ups',
		'Dumbbell Overhead Press',
		'Dips',
		'Plank Variations',
		'Ab Wheel Rollouts',
		'Weighted Carries',
		'Leg Raises',
		'Push-ups',
		'Cheat curls',
		'Drag curls',
		'Lateral Raises',
		'Upright Rows',
		'Shoulder press',
		'Meadows Rows',
		'Helms Row',
		'Spider curls',
		'Barbell Shrugs',
		'Dumbell Shrugs',
		'Preacher curls',
		'EZ bar curls',
		'Barbell curls',
		'Hammer curls',
		'Reverse curls',
		'Wrist curls',
		'Wrist reverse curls',
		'Sissy squats',
		'Seated calf raises',
		'Rear delt fly',
		'Tricep kickback',
		'Overhead Tricep extension',
		'Tricep Pushdown',
		'Neck curl',
		'JM Press',
		'Rack Pull',
		'Arnold Press',
		'Dumbell pullovers',
		'Stiff Leg Deadlift',
		'Zercher Shrug',
		'Zercher Squat',
		'Zercher Deadlift',
		'Larsen Press',
		'Reverse Grip Bench',
		'Incline Bench',
		'Decline Bench',
	],
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
	async ({ logData, logId }, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await logService.updateLog(logData, logId, token)
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
		addExercise: (state, action) =>
			state.exercises.push(action.payload),
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
				state.prevLogs = action.payload
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
				state.currentLogs = action.payload
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
				state.currentLogs.push(action.payload)
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
				state.currentLogs = state.currentLogs.filter(
					(log) => log._id !== action.payload._id
				)
				state.currentLogs.push(action.payload)
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
				state.currentLogs = state.currentLogs.filter(
					(log) => log._id !== action.payload
				)
			})
			.addCase(deleteLog.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
	},
})

export const { reset, addExercise } = logSlice.actions
export default logSlice.reducer
