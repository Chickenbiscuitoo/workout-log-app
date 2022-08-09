import React, { useState } from 'react'
import styles from '../styles/home.module.css'
import Dropdown from '../components/Dropdown'
import { BiLogOutCircle } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Home() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { user } = useSelector((state) => state.auth)

	const onLogout = () => {
		dispatch(logout())
		dispatch(reset())
		navigate('/')
	}

	const [exerciseToLog, setExerciseToLog] = useState('')

	const handleAddItem = (name) => {
		setExerciseToLog(name)
	}

	return (
		<div className={styles.container}>
			<div className={styles.cal}>
				<h2 className={styles.title}>Previous Week Log</h2>
				<div className={styles.logcontainer}>
					<div className={styles.loggroup}>
						<h6 className={styles.logdate}>01/08/2022</h6>
						<span className={styles.logexercise}>
							<h5 className={styles.logexercisetitle}>
								Bench
							</h5>
							<p className={styles.logentry}>85x3</p>
							<p className={styles.logentry}>80x6</p>
							<p className={styles.logentry}>80x4</p>
							<p className={styles.logentry}>80x2</p>
						</span>
						<span className={styles.logexercise}>
							<h5 className={styles.logexercisetitle}>
								Squat
							</h5>
							<p className={styles.logentry}>185x3</p>
							<p className={styles.logentry}>180x6</p>
							<p className={styles.logentry}>180x4</p>
							<p className={styles.logentry}>180x2</p>
						</span>
						<span className={styles.logexercise}>
							<h5 className={styles.logexercisetitle}>
								Deadlift
							</h5>
							<p className={styles.logentry}>285x3</p>
							<p className={styles.logentry}>280x6</p>
							<p className={styles.logentry}>280x4</p>
							<p className={styles.logentry}>280x2</p>
						</span>
					</div>
					<div className={styles.loggroup}>
						<h6 className={styles.logdate}>02/08/2022</h6>
						<span className={styles.logexercise}>
							<h5 className={styles.logexercisetitle}>
								OHP
							</h5>
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
							<h5 className={styles.logexercisetitle}>
								OHP
							</h5>
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
							<h5 className={styles.logexercisetitle}>
								OHP
							</h5>
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
							<h5 className={styles.logexercisetitle}>
								OHP
							</h5>
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
			<button className={styles.btnlogout} onClick={onLogout}>
				<BiLogOutCircle />
			</button>
		</div>
	)
}

export default Home
