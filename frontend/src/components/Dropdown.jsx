import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import styles from '../styles/home.module.css'

function Dropdown({ menuItems, handleAddItem }) {
	const [isShown, setIsShown] = useState(false)

	const handleShowMenu = () => {
		setIsShown((prevState) => !prevState)
	}

	const addItem = (e) => {
		handleAddItem(e.target.name)
		setIsShown(false)
	}

	const menuItemsList = menuItems.map((item) => {
		return (
			<button
				name={item}
				className="menu-button"
				onClick={(e) => addItem(e)}
			>
				{item}
			</button>
		)
	})

	return (
		<div className={styles.dropdown}>
			<button className={styles.dropbtn} onClick={handleShowMenu}>
				<AiFillPlusCircle />
			</button>

			{isShown && (
				<div className={styles.dropdowncontent}>
					{menuItemsList}
				</div>
			)}
		</div>
	)
}

export default Dropdown
