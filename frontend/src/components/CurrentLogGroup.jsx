import React, { useState, useEffect } from 'react'
import LogItem from './LogItem'
import styles from '../styles/home.module.css'
import Dropdown from './Dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { createLog } from '../features/logs/logSlice'

function CurrentLogGroup({ date, logs }) {
	const [exerciseToLog, setExerciseToLog] = useState('')

	const dispatch = useDispatch()
	const { isError, message } = useSelector((state) => state.log)
	const { user } = useSelector((state) => state.auth)

	useEffect(() => {
		if (isError) {
			console.log(message)
		}
	}, [isError, message])

	const logItems = logs.map((log) => (
		<LogItem
			key={log._id}
			logId={log._id}
			exercise={log.exercise}
			sets={log.sets}
		/>
	))

	const handleAddItem = (name) => {
		setExerciseToLog(name)
		addLog(name)
	}

	const addLog = (name) => {
		const logData = {
			hostId: user._id,
			exercise: exerciseToLog || name,
		}

		dispatch(createLog(logData))
	}

	return (
		<div className={styles.loggroup}>
			<span className={styles.titlegroup}>
				<h6 className={styles.logdate}>{date}</h6>
				<Dropdown handleAddItem={handleAddItem} />
			</span>
			{logItems}
		</div>
	)
}

export default CurrentLogGroup
