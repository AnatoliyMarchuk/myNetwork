import React from 'react';
import MyPosts from './MyPosts/MyPost';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default function Profile(props) {
	return (
		<div className={s.Profile}>
			<ProfileInfo />
			<MyPosts postsData={props.state.postsData} />
		</div>
	);
}
