import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

export default function Navbar() {
	const setActive = ({ isActive }) =>
		isActive ? `${s.item_Active}` : `${s.item}`;
	return (
		<nav className={s.nav}>
			<NavLink to="/" className={setActive}>
				HomePage
			</NavLink>
			<NavLink to="/profile" className={setActive}>
				Profile
			</NavLink>
			<NavLink to="/dialogs" className={setActive}>
				Dialogs
			</NavLink>
			<NavLink to="/music" className={setActive}>
				Music
			</NavLink>
			<NavLink to="/news" className={setActive}>
				News
			</NavLink>
			<NavLink to="/settings" className={setActive}>
				Settings
			</NavLink>
		</nav>
	);
}
