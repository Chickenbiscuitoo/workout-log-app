import React from 'react'
import PrevLogItem from './PrevLogItem'
import styles from '../styles/home.module.css'

function PrevLogGroup({ date, logs }) {
	const logItems = logs.map((log) => (
		<PrevLogItem
			key={log._id}
			exercise={log.exercise}
			sets={log.sets}
		/>
	))

	return (
		<div className={styles.loggroup}>
			<h6 className={styles.logdate}>{date}</h6>
			{logItems}
		</div>
	)
}

export default PrevLogGroup
