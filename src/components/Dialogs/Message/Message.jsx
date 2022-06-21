import React from 'react';
import s from './Message.module.css';

export default function Message(props) {
	// console.log(props);
	// let newMessage = React.createRef();
	// const addMessage = () => {
	// 	let text = newMessage.current.value;
	// 	addMessage(text);
	// };

	return (
		<div className={s.message}>
			{props.message}
			{/* <textarea className={s.item_area} ref={newMessage} /> */}
			{/* <button className={`btn ${s.btn}`} onClick={addMessage}>
				add message
			</button> */}
		</div>
	);
}
