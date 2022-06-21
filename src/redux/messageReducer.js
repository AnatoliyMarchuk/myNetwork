const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
	users: [
		{
			name: 'Ivan',
			id: 1,
			img: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/05.jpg',
		},
		{
			name: 'Marysy',
			id: 2,
			img: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/09.jpg',
		},
		{
			name: 'Petro',
			id: 3,
			img: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/08.jpg',
		},
		{
			name: 'Andre',
			id: 4,
			img: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/1.jpg ',
		},
		{
			name: 'Vaslii',
			id: 5,
			img: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/07.jpg ',
		},
	],
	messageData: [
		{ id: 1, message: 'yo' },
		{ id: 2, message: 'Hello' },
		{ id: 3, message: 'How are you?' },
		{ id: 4, message: 'I am fine and you' },
		{ id: 5, message: 'It place for some message' },
	],
};
const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			return {
				...state,
				messageData: [...state.messageData, { message: action.message }],
			};

		default:
			return state;
	}
};

export default messageReducer;

export let addMessageCreator = (message) => ({
	type: SEND_MESSAGE,
	message,
});
