import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from '../styles/home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentLogs, reset } from '../features/logs/logSlice'
import CurrentLogGroup from './CurrentLogGroup'
import Spinner from './Spinner'

function CurrentWeekLog() {
	const [logDates, setLogDates] = useState([])

	const dispatch = useDispatch()
	const { currentLogs, isError, isLoading, message } = useSelector(
		(state) => state.log
	)

	useEffect(() => {
		if (isError) {
			console.log(message)
		}

		dispatch(getCurrentLogs())

		return () => {
			dispatch(reset())
		}
	}, [isError, message, dispatch])

	useEffect(() => {
		let allDates = []
		currentLogs.map((log) => {
			return allDates.push(log.createdAt.slice(0, 10))
		})
		let uniqueDates = [...new Set(allDates)]
		setLogDates(uniqueDates)
	}, [currentLogs])

	const logGroups = logDates.map((date) => {
		const filteredLogs = currentLogs.filter(
			(log) => log.createdAt.slice(0, 10) === date
		)
		return (
			<CurrentLogGroup
				key={uuidv4()}
				date={date}
				logs={filteredLogs}
			/>
		)
	})

	if (isLoading) {
		return <Spinner />
	}

	return (
		<div className={styles.cal}>
			<h2 className={styles.title}>This Week Log</h2>
			<div className={styles.logcontainer}>{logGroups}</div>
		</div>
	)
}

export default CurrentWeekLog
