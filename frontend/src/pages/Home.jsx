import React, { useEffect } from 'react'
import styles from '../styles/home.module.css'
import PrevWeekLog from '../components/PrevWeekLog'
import CurrentWeekLog from '../components/CurrentWeekLog'

import { BiLogOutCircle } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Home() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { user, isError, message } = useSelector((state) => state.auth)

	const onLogout = () => {
		dispatch(logout())
		dispatch(reset())
		navigate('/')
	}

	useEffect(() => {
		if (isError) {
			console.log(message)
		}

		if (!user) {
			navigate('/login')
		}

		return () => {
			dispatch(reset())
		}
	}, [user, navigate, isError, message, dispatch])

	return (
		<div className={styles.container}>
			<PrevWeekLog />
			<CurrentWeekLog />
			<button className={styles.btnlogout} onClick={onLogout}>
				<BiLogOutCircle />
			</button>
		</div>
	)
}

export default Home
