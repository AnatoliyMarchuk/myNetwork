import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default function Profile(props) {
	// debugger;

	return (
		<div className={s.Profile}>
			<ProfileInfo
				profile={props.profile}
				status={props.status}
				updateUserStatus={props.updateUserStatus}
			/>
			<MyPostsContainer />
		</div>
	);
}
