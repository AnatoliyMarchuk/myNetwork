import React from 'react';
import s from './Header.module.css';

export default function Header() {
	return (
		<header className={s.header}>
			<img
				className={s.logo}
				src="https://templates.iqonic.design/socialv/bs5/vue/dist/img/logo.f507d54e.png"
				alt="img"
			/>
		</header>
	);
}
