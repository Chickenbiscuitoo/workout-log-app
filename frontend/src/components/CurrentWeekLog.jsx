import React, { useState } from 'react'
import Dropdown from './Dropdown'
import styles from '../styles/home.module.css'

function CurrentWeekLog() {
	const [exerciseToLog, setExerciseToLog] = useState('')

	const handleAddItem = (name) => {
		setExerciseToLog(name)
	}

	return (
		<div className={styles.cal}>
			<h2 className={styles.title}>This Week Log</h2>
			<div className={styles.logcontainer}>
				<div className={styles.loggroup}>
					<span className={styles.titlegroup}>
						<h6 className={styles.logdate}>02/08/2022</h6>
						<Dropdown
							menuItems={['bench', 'squat', 'deadlift']}
							handleAddItem={handleAddItem}
						/>
					</span>
					<span className={styles.logexercise}>
						<span className={styles.titlegroup}>
							<h5 className={styles.logexercisetitle}>
								Bench
							</h5>
						</span>
						<p className={styles.logentry}>85x3</p>
						<p className={styles.logentry}>80x6</p>
						<p className={styles.logentry}>80x4</p>
						<p className={styles.logentry}>80x2</p>
					</span>
					<span className={styles.logexercise}>
						<span className={styles.titlegroup}>
							<h5 className={styles.logexercisetitle}>
								Weighted Pull Ups
							</h5>
						</span>
						<p className={styles.logentry}>185x3</p>
						<p className={styles.logentry}>180x6</p>
						<p className={styles.logentry}>180x4</p>
						<p className={styles.logentry}>180x2</p>
					</span>
					<span className={styles.logexercise}>
						<span className={styles.titlegroup}>
							<h5 className={styles.logexercisetitle}>
								French Press
							</h5>
						</span>
						<p className={styles.logentry}>285x3</p>
						<p className={styles.logentry}>280x6</p>
						<p className={styles.logentry}>280x4</p>
						<p className={styles.logentry}>280x2</p>
					</span>
				</div>
				<div className={styles.loggroup}>
					<span className={styles.titlegroup}>
						<h6 className={styles.logdate}>02/08/2022</h6>
						<Dropdown
							menuItems={['bench', 'squat', 'deadlift']}
						/>
					</span>
					<span className={styles.logexercise}>
						<span className={styles.titlegroup}>
							<h5 className={styles.logexercisetitle}>
								OHP
							</h5>
						</span>
						<p className={styles.logentry}>85x3</p>
						<p className={styles.logentry}>80x6</p>
						<p className={styles.logentry}>80x4</p>
						<p className={styles.logentry}>80x2</p>
					</span>
					<span className={styles.logexercise}>
						<span className={styles.titlegroup}>
							<h5 className={styles.logexercisetitle}>
								Squat
							</h5>
						</span>
						<p className={styles.logentry}>185x3</p>
						<p className={styles.logentry}>180x6</p>
						<p className={styles.logentry}>180x4</p>
						<p className={styles.logentry}>180x2</p>
					</span>
					<span className={styles.logexercise}>
						<span className={styles.titlegroup}>
							<h5 className={styles.logexercisetitle}>
								Deadlift
							</h5>
						</span>
						<p className={styles.logentry}>285x3</p>
						<p className={styles.logentry}>280x6</p>
						<p className={styles.logentry}>280x4</p>
						<p className={styles.logentry}>280x2</p>
					</span>
				</div>
				<div className={styles.loggroup}>
					<span className={styles.titlegroup}>
						<h6 className={styles.logdate}>02/08/2022</h6>
						<Dropdown
							menuItems={['bench', 'squat', 'deadlift']}
						/>
					</span>
					<span className={styles.logexercise}>
						<span className={styles.titlegroup}>
							<h5 className={styles.logexercisetitle}>
								Bench
							</h5>
						</span>
						<p className={styles.logentry}>85x3</p>
						<p className={styles.logentry}>80x6</p>
						<p className={styles.logentry}>80x4</p>
						<p className={styles.logentry}>80x2</p>
					</span>
					<span className={styles.logexercise}>
						<span className={styles.titlegroup}>
							<h5 className={styles.logexercisetitle}>
								Bench
							</h5>
						</span>
						<p className={styles.logentry}>185x3</p>
						<p className={styles.logentry}>180x6</p>
						<p className={styles.logentry}>180x4</p>
						<p className={styles.logentry}>180x2</p>
					</span>
					<span className={styles.logexercise}>
						<span className={styles.titlegroup}>
							<h5 className={styles.logexercisetitle}>
								Bench
							</h5>
						</span>
						<p className={styles.logentry}>285x3</p>
						<p className={styles.logentry}>280x6</p>
						<p className={styles.logentry}>280x4</p>
						<p className={styles.logentry}>280x2</p>
					</span>
				</div>
			</div>
		</div>
	)
}

export default CurrentWeekLog
