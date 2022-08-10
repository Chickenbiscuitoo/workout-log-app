import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import styles from '../styles/home.module.css'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'

function Dropdown({ handleAddItem }) {
	const [isShown, setIsShown] = useState(false)
	const [query, setQuery] = useState('')

	const { exercises } = useSelector((state) => state.log)

	const handleShowMenu = () => {
		setIsShown((prevState) => !prevState)
	}

	const addItem = (e) => {
		handleAddItem(e.target.name)
		setIsShown(false)
	}

	const menuItemsList = exercises.map((item) => {
		if (!query) {
			return (
				<button
					key={uuidv4()}
					name={item}
					className="menu-button"
					onClick={(e) => addItem(e)}
				>
					{item}
				</button>
			)
		}
		if (item.toLowerCase().includes(query.toLowerCase())) {
			return (
				<button
					key={uuidv4()}
					name={item}
					className="menu-button"
					onClick={(e) => addItem(e)}
				>
					{item}
				</button>
			)
		}
	})

	const handleChange = (e) => {
		setQuery(e.target.value)
	}

	return (
		<div className={styles.dropdown}>
			<button className={styles.dropbtn} onClick={handleShowMenu}>
				<AiFillPlusCircle />
			</button>

			{isShown && (
				<div className={styles.dropdowncontent}>
					<input
						type="text"
						value={query}
						onChange={handleChange}
						className={styles.dropdowncontentinput}
					/>
					{menuItemsList}
				</div>
			)}
		</div>
	)
}

export default Dropdown
