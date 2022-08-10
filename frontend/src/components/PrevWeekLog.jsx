import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from '../styles/home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getPrevLogs, reset } from '../features/logs/logSlice'
import PrevLogGroup from './PrevLogGroup'
import Spinner from './Spinner'

function PrevWeekLog() {
	const [logDates, setLogDates] = useState([])

	const dispatch = useDispatch()
	const { prevLogs, isError, isLoading, message } = useSelector(
		(state) => state.log
	)

	useEffect(() => {
		if (isError) {
			console.log(message)
		}

		dispatch(getPrevLogs())

		return () => {
			dispatch(reset())
		}
	}, [isError, message, dispatch])

	useEffect(() => {
		let allDates = []
		prevLogs.map((log) => {
			return allDates.push(log.createdAt.slice(0, 10))
		})
		let uniqueDates = [...new Set(allDates)]
		setLogDates(uniqueDates)
	}, [prevLogs])

	const logGroups = logDates.map((date) => {
		const filteredLogs = prevLogs.filter(
			(log) => log.createdAt.slice(0, 10) === date
		)
		return (
			<PrevLogGroup key={uuidv4()} date={date} logs={filteredLogs} />
		)
	})

	if (isLoading) {
		return <Spinner />
	}

	return (
		<div className={styles.cal}>
			<h2 className={styles.title}>Previous Week Log</h2>
			<div className={styles.logcontainer}>{logGroups}</div>
		</div>
	)
}

export default PrevWeekLog
