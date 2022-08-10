import React, { useState } from 'react'
import {
	AiOutlinePlusCircle,
	AiFillFileAdd,
	AiOutlineDelete,
} from 'react-icons/ai'
import styles from '../styles/home.module.css'
import { useDispatch } from 'react-redux'
import { deleteLog, updateLog } from '../features/logs/logSlice'

function LogInput({ logId }) {
	const [isShown, setIsShown] = useState(false)
	const [formData, setFormData] = useState({
		weight: '',
		reps: '',
	})

	const dispatch = useDispatch()

	const handleShowMenu = () => {
		setIsShown((prevState) => !prevState)
	}

	const handleChange = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const logData = {
			weight: parseInt(formData.weight),
			reps: parseInt(formData.reps),
		}

		dispatch(updateLog({ logData, logId }))
	}

	const handleDelete = () => {
		dispatch(deleteLog(logId))
	}

	return (
		<div className={styles.dropdown}>
			<button
				className={styles.dropbtnsecondary}
				onClick={handleShowMenu}
			>
				<AiOutlinePlusCircle />
			</button>
			<button
				className={styles.dropbtnsecondary}
				onClick={handleDelete}
			>
				<AiOutlineDelete />
			</button>

			{isShown && (
				<div>
					<form
						onSubmit={handleSubmit}
						className={styles.dropdowncontentlog}
					>
						<input
							type="text"
							name="weight"
							value={formData.weight}
							onChange={handleChange}
							placeholder="Weight"
							className={styles.dropdowncontentinputlog}
						/>
						<input
							type="text"
							name="reps"
							value={formData.reps}
							onChange={handleChange}
							placeholder="Reps"
							className={styles.dropdowncontentinputlog}
						/>
						<button type="submit" className={styles.dropbtn}>
							<AiFillFileAdd />
						</button>
					</form>
				</div>
			)}
		</div>
	)
}

export default LogInput
