import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../styles/form.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	})

	const { name, email, password, password2 } = formData

	const navigate = useNavigate()
	const dispatch = useDispatch()

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

		if (password !== password2) {
			console.log('Passwords do not match')
		} else {
			const userData = {
				name,
				email,
				password,
			}

			dispatch(register(userData))
		}
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Register</h1>
				<form className={styles.form} onSubmit={onSubmit}>
					<div className={styles.formgroup}>
						<input
							type="text"
							placeholder="Name"
							name="name"
							value={name}
							onChange={onChange}
						/>
					</div>
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
					<div className={styles.formgroup}>
						<input
							type="text"
							placeholder="Verify Password"
							name="password2"
							value={password2}
							onChange={onChange}
						/>
					</div>
					<button className={styles.btn} type="submit">
						Sign Up
					</button>
				</form>
				<span className={styles.text}>
					Already have an account?
					<Link to="/login">
						<button className={styles.link}>Log in</button>
					</Link>
				</span>
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

export default Register
