import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

import styles from '../styles/form.module.css'

function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const { email, password } = formData

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	)

	useEffect(() => {
		if (isError) {
			console.log(message)
		}

		if (isSuccess || user) {
			navigate('/home')
		}

		dispatch(reset())
	}, [user, isError, isSuccess, message, navigate, dispatch])

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const onSubmit = (e) => {
		e.preventDefault()

		const userData = {
			email,
			password,
		}

		dispatch(login(userData))
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Sign In</h1>
				<form className={styles.form} onSubmit={onSubmit}>
					<div className={styles.formgroup}>
						<input
							type="text"
							placeholder="Email"
							name="email"
							value={email}
							onChange={onChange}
						/>
					</div>
					<div className={styles.formgroup}>
						<input
							type="text"
							placeholder="Password"
							name="password"
							value={password}
							onChange={onChange}
						/>
					</div>
					<button className={styles.btn} type="submit">
						Log In
					</button>
				</form>
			</div>
			<div className={styles.imgcontainer}>
				<img
					src={require('../imgs/tumblr_o1wgm7Gsj71r55oyno1_r1_1280.png')}
					alt=""
				/>
			</div>
		</div>
	)
}
export default Login
