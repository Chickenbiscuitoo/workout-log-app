import React from 'react'
import styles from '../styles/home.module.css'

function PrevLogItem({ date, exercise, sets }) {
	const set = sets.map((set) => (
		<p className={styles.logentry}>{`${set.weight}x${set.reps}`}</p>
	))
	return (
		<div className={styles.loggroup}>
			<h6 className={styles.logdate}>{date}</h6>
			<span className={styles.logexercise}>
				<h5 className={styles.logexercisetitle}>{exercise}</h5>
				<p className={styles.logentry}>85x3</p>
				<p className={styles.logentry}>80x6</p>
				<p className={styles.logentry}>80x4</p>
				<p className={styles.logentry}>80x2</p>
			</span>
			<span className={styles.logexercise}>
				<h5 className={styles.logexercisetitle}>French Press</h5>
				<p className={styles.logentry}>185x3</p>
				<p className={styles.logentry}>180x6</p>
				<p className={styles.logentry}>180x4</p>
				<p className={styles.logentry}>180x2</p>
			</span>
			<span className={styles.logexercise}>
				<h5 className={styles.logexercisetitle}>
					Weighted Pull Ups
				</h5>
				<p className={styles.logentry}>285x3</p>
				<p className={styles.logentry}>280x6</p>
				<p className={styles.logentry}>280x4</p>
				<p className={styles.logentry}>280x2</p>
			</span>
		</div>
	)
}

export default PrevLogItem
