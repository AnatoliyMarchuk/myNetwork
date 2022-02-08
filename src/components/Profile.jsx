import React from 'react';

export default function Profile() {
	return (
		<div className="content">
			<img
				src="https://t4.ftcdn.net/jpg/02/99/73/07/240_F_299730781_D2CZYaxecEerqAAlRZZushSUml5Tm5Kq.jpg"
				alt="img"
			/>
			<div>
				{' '}
				<img
					className="content-ava"
					src="https://t4.ftcdn.net/jpg/02/18/98/81/240_F_218988112_FV48JY1VjxsXdppOTdPa8gmd6WjIKDlQ.jpg"
					alt="some "
				/>
				ava + description
			</div>
			<div>
				My posts
				<div>New post</div>
				<div>post 1 </div>
				<div>post 2 </div>
			</div>
			Main content
		</div>
	);
}
