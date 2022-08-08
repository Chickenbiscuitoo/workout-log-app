import React from 'react'
import styles from '../styles/style.module.css'
import { Link } from 'react-router-dom'

function Landing() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Your Workout Log</h1>
				<p className={styles.text}>
					Log Your Workouts To See Your Progress
				</p>
				<Link to="/register">
					<button className={styles.btn}>Sign Up</button>
				</Link>
			</div>
			<div className={styles.imgcontainer}>
				<img
					src={require('../imgs/68dd2c2563f9665a717b56305b8980d4.jpg')}
					alt=""
				/>
			</div>
		</div>
	)
}

export default Landing
