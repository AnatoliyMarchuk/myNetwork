import React from 'react';
import Preloader from '../../../commons/loader/Preloader';
import s from './ProfileInfo.module.css';
import smileTrue from '../../../assets/img/smileTrue.png';
import smileFalse from '../../../assets/img/smileFalse.png';
import defaultFoto from '../../../assets/img/AvaDefolt.png';

import ProfileStatus from './ProfileStatus';

export default function ProfileInfo({ profile, status, updateUserStatus }) {
	if (!profile) {
		return <Preloader />;
	} else {
		const contactsKey = Object.keys(profile.contacts);

		return (
			<div>
				<img
					src='https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg3.jpg'
					alt='img'
				/>{' '}
				<div className={s.description_block}>
					{' '}
					<h2> {profile.fullName}</h2>
					<img
						className={s.img}
						src={profile.photos.large ? profile.photos.large : defaultFoto}
						alt='large'
					/>
					<h4>
						<span> {profile.aboutMe}</span>
					</h4>
					<div className={s.description_job}>
						Пошук роботи:
						<hr />{' '}
						{profile.lookingForAJob ? (
							<img src={smileTrue} alt='smile' />
						) : (
							<img src={smileFalse} alt='smile' />
						)}{' '}
						<div className={s.description_for_job}>{profile.lookingForAJobDescription}</div>
					</div>
					<div className={s.about}>
						<div className={s.contacts}>
							<div className={s.title}>
								Контакти
								<hr />
								<div className={s.description}>
									<div className={s.description_name}>
										<h6>Email</h6>
									</div>
									<div className={s.description_content}>
										<p>Bnijohn@gmail.com</p>
									</div>
								</div>
								<div className={s.description}>
									<div className={s.description_name}>
										<h6>Mobile</h6>
									</div>
									<div className={s.description_content}>
										<p>(001) 4544 565 456</p>
									</div>
								</div>
								<div className={s.description}>
									<div className={s.description_name}>
										<h6>Address</h6>
									</div>
									<div className={s.description_content}>
										<p>United States of America</p>
									</div>
								</div>
							</div>
						</div>{' '}
						<div className={s.website}>
							<hr />
							<h4>Websites and Social Links </h4>
							<div className={s.description}>
								<div className={s.description_name}>
									<h6>{contactsKey[0]}</h6>
								</div>
								<div className={s.description_content}>
									<p>{profile.contacts.facebook}</p>
								</div>
							</div>
							<div className={s.description}>
								<div className={s.description_name}>
									<h6>{contactsKey[1]}</h6>
								</div>
								<div className={s.description_content}>
									<p>{profile.contacts.website}</p>
								</div>
							</div>
							<div className={s.description}>
								<div className={s.description_name}>
									<h6>{contactsKey[2]}</h6>
								</div>
								<div className={s.description_content}>
									<p>{profile.contacts.vk}</p>
								</div>
							</div>
							<div className={s.description}>
								<div className={s.description_name}>
									<h6>{contactsKey[3]}</h6>
								</div>
								<div className={s.description_content}>
									<p>{profile.contacts.twitter}</p>
								</div>
							</div>
							<div className={s.description}>
								<div className={s.description_name}>
									<h6>{contactsKey[4]}</h6>
								</div>
								<div className={s.description_content}>
									<p>{profile.contacts.instagram}</p>
								</div>
							</div>
							<div className={s.description}>
								<div className={s.description_name}>
									<h6>{contactsKey[5]}</h6>
								</div>
								<div className={s.description_content}>
									<p>{profile.contacts.youtube}</p>
								</div>
							</div>
							<div className={s.description}>
								<div className={s.description_name}>
									<h6>{contactsKey[6]}</h6>
								</div>
								<div className={s.description_content}>
									<p>{profile.contacts.github}</p>
								</div>
							</div>
							<div className={s.description}>
								<div className={s.description_name}>
									<h6>{contactsKey[7]}</h6>
								</div>
								<div className={s.description_content}>
									<p>{profile.contacts.mainLink}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ProfileStatus status={status} updateUserStatus={updateUserStatus} />
			</div>
		);
	}
}
