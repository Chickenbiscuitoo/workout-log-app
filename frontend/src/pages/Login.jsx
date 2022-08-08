import React from 'react'
import styles from '../styles/form.module.css'

function Login() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Sign In</h1>
				<form className={styles.form}>
					<div className={styles.formgroup}>
						<input type="text" placeholder="Email" />
					</div>
					<div className={styles.formgroup}>
						<input type="text" placeholder="Password" />
					</div>
				</form>
				<button className={styles.btn}>Log In</button>
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
