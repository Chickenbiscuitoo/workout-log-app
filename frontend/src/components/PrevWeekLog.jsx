import React, { useEffect } from 'react'
import styles from '../styles/home.module.css'
import { useNavigate } from 'react-router-dom'
import PrevLogItem from './PrevLogItem'
import { useSelector, useDispatch } from 'react-redux'
import { getPrevLogs, reset } from '../features/logs/logSlice'

function PrevWeekLog() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { user } = useSelector((state) => state.auth)
	const { logs, isError, isSuccess, isLoading, message } = useSelector(
		(state) => state.log
	)

	useEffect(() => {
		if (isError) {
			console.log(message)
		}

		if (!user) {
			navigate('/login')
		}

		dispatch(getPrevLogs())

		return () => {
			dispatch(reset())
		}
	}, [user, navigate, isError, message, dispatch])

	console.log(logs)

	return (
		<div className={styles.cal}>
			<h2 className={styles.title}>Previous Week Log</h2>
			<div className={styles.logcontainer}>
				<PrevLogItem
					date="08/07/2022"
					exercise="Deadlift"
					sets={[
						{ weight: 220, reps: 3 },
						{ weight: 200, reps: 3 },
						{ weight: 180, reps: 3 },
						{ weight: 180, reps: 3 },
					]}
				/>
				<div className={styles.loggroup}>
					<h6 className={styles.logdate}>02/08/2022</h6>
					<span className={styles.logexercise}>
						<h5 className={styles.logexercisetitle}>OHP</h5>
						<p className={styles.logentry}>85x3</p>
						<p className={styles.logentry}>80x6</p>
						<p className={styles.logentry}>80x4</p>
						<p className={styles.logentry}>80x2</p>
					</span>
					<span className={styles.logexercise}>
						<h5 className={styles.logexercisetitle}>
							French Press
						</h5>
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
				<div className={styles.loggroup}>
					<h6 className={styles.logdate}>03/08/2022</h6>
					<span className={styles.logexercise}>
						<h5 className={styles.logexercisetitle}>OHP</h5>
						<p className={styles.logentry}>85x3</p>
						<p className={styles.logentry}>80x6</p>
						<p className={styles.logentry}>80x4</p>
						<p className={styles.logentry}>80x2</p>
					</span>
					<span className={styles.logexercise}>
						<h5 className={styles.logexercisetitle}>
							French Press
						</h5>
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
				<div className={styles.loggroup}>
					<h6 className={styles.logdate}>04/08/2022</h6>
					<span className={styles.logexercise}>
						<h5 className={styles.logexercisetitle}>OHP</h5>
						<p className={styles.logentry}>85x3</p>
						<p className={styles.logentry}>80x6</p>
						<p className={styles.logentry}>80x4</p>
						<p className={styles.logentry}>80x2</p>
					</span>
					<span className={styles.logexercise}>
						<h5 className={styles.logexercisetitle}>
							French Press
						</h5>
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
				<div className={styles.loggroup}>
					<h6 className={styles.logdate}>05/08/2022</h6>
					<span className={styles.logexercise}>
						<h5 className={styles.logexercisetitle}>OHP</h5>
						<p className={styles.logentry}>85x3</p>
						<p className={styles.logentry}>80x6</p>
						<p className={styles.logentry}>80x4</p>
						<p className={styles.logentry}>80x2</p>
					</span>
					<span className={styles.logexercise}>
						<h5 className={styles.logexercisetitle}>
							French Press
						</h5>
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
			</div>
		</div>
	)
}

export default PrevWeekLog
