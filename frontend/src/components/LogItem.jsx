import React from 'react'
import styles from '../styles/home.module.css'
import { v4 as uuidv4 } from 'uuid'
import LogInput from './LogInput'

function LogItem({ exercise, sets, logId }) {
	const setItems = sets.map((set) => (
		<p
			key={uuidv4()}
			className={styles.logentry}
		>{`${set.weight}x${set.reps}`}</p>
	))
	return (
		<span className={styles.logexercise}>
			<span className={styles.titlegroup}>
				<h5 className={styles.logexercisetitle}>{exercise}</h5>
				<LogInput logId={logId} />
			</span>
			{setItems}
		</span>
	)
}

export default LogItem
