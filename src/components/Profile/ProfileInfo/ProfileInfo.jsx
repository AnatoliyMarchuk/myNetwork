import React from 'react';
import s from './ProfileInfo.module.css';

export default function ProfileInfo() {
	return (
		<div>
			<img
				src="https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg3.jpg"
				alt="img"
			/>{' '}
			<div className={s.description_block}>
				{' '}
				<p> ava + description</p>{' '}
			</div>
		</div>
	);
}
