import React from 'react'
import styles from '../styles/form.module.css'
import { Link } from 'react-router-dom'

function Register() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Register</h1>
				<form className={styles.form}>
					<div className={styles.formgroup}>
						<input type="text" placeholder="Name" />
					</div>
					<div className={styles.formgroup}>
						<input type="text" placeholder="Email" />
					</div>
					<div className={styles.formgroup}>
						<input type="text" placeholder="Password" />
					</div>
					<div className={styles.formgroup}>
						<input type="text" placeholder="Check Password" />
					</div>
				</form>
				<button className={styles.btn}>Sign Up</button>
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
