import React from 'react';
import s from './Messages.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

export default function Messages(props) {
	console.log(props);
	const dialogMessages = props.state.messageData.map((item, index) => {
		return <Message message={item.message} key={index} />;
	});
	const dialogItems = props.state.usersData.map((item) => {
		return (
			<DialogsItem name={item.name} id={item.id} key={item.id} img={item.img} />
		);
	});
	return (
		<div className={s.dialogs}>
			<div className={s.users}>{dialogItems}</div>

			<div className={s.messages}>{dialogMessages}</div>
		</div>
	);
}
