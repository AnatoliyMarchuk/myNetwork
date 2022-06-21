import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
	posts: [
		{
			message: 'Hi i am props ',
			count: 15,
			img: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/05.jpg',
		},
		{
			message: ' So what',
			count: 50,
			img: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/06.jpg',
		},
		{
			age: 30,
			count: 20,
			img: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/07.jpg',
		},
	],

	profile: null,
	status: '',
	login: null,
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: action.post,
				likesCount: 0,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
			};
		}

		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile };
		}
		case SET_STATUS: {
			return { ...state, status: action.status };
		}

		default:
			return state;
	}
};

export let addPostCreator = (post) => ({ type: ADD_POST, post });

export let setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
});
export let setStatus = (status) => ({
	type: SET_STATUS,
	status,
});

export const getUserProfile = (profileId) => {
	return async (dispatch) => {
		const data = await usersAPI.getProfile(profileId);
		dispatch(setUserProfile(data));
	};
};
export const getUserStatus = (profileId) => {
	return async (dispatch) => {
		const data = await profileAPI.getStatus(profileId);
		// debugger;
		dispatch(setStatus(data));
	};
};
export const updateUserStatus = (status) => {
	return async (dispatch) => {
		const data = await profileAPI.updateStatus(status);
		if (data.resultCode === 0) {
			// debugger;
			dispatch(setStatus(status));
		}
	};
};

export default profileReducer;
