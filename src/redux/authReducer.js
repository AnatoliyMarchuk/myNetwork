import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PROFILE_PHOTO = 'SET_USER_PROFILE_PHOTO';

// debugger;
let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	isFetching: false,
	profilePhoto: null,
};
const usersReducer = (state = initialState, action) => {
	// debugger;
	switch (action.type) {
		case SET_USER_DATA: {
			return { ...state, ...action.payload };
		}
		case SET_USER_PROFILE_PHOTO: {
			return { ...state, profilePhoto: action.profilePhoto };
		}

		default:
			return state;
	}
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA,
	payload: { userId, email, login, isAuth },
});
export const setUserProfilePhoto = (profilePhoto) => ({
	type: SET_USER_PROFILE_PHOTO,
	profilePhoto,
});

export const auth = () => {
	return async (dispatch) => {
		const response = await authAPI.me();

		if (response.resultCode === 0) {
			let { id, login, email } = response.data;
			dispatch(setAuthUserData(id, email, login, true));
		}
	};
};
export const userLogin = (email, password, rememberMe, setStatus) => {
	return async (dispatch) => {
		const response = await authAPI.login(email, password, rememberMe);
		// debugger;
		if (response.resultCode === 0) {
			dispatch(auth());
		} else {
			let message = response.messages.length > 0 ? response.messages.join(' ') : 'Some error!';
			setStatus(message);
		}
	};
};
export const userLogout = () => {
	return async (dispatch) => {
		const response = await authAPI.logout();
		// debugger;
		if (response.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false));
		}
	};
};

export default usersReducer;
