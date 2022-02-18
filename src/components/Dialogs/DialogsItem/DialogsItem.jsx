import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogsItem.module.css';

export default function DialogsItem(props) {
	const path = '/dialogs/' + props.id;
	console.log(props);
	const setActive = ({ isActive }) =>
		isActive ? `${s.dialog_Active}` : `${s.dialog}`;

	return (
		<div className={s.dialog}>
			<NavLink className={setActive} to={path} img={props.img}>
				<img src={props.img} alt="ava" />
				{props.name}
			</NavLink>
		</div>
	);
}
