import { ACTION_TYPE } from '../actions';

const initialAppState = {
	wasLogout: false,
	notFoundProducts: false,
	modal: {
		isOpen: false,
		isAuthorization: false,
		isRegistration: false,
		// onConfirm: () => {},
		// onCancel: () => {},
	},
	search: {
		shouldSearch: false,
		searchPhrase: '',
	},
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.OPEN_MODAL:
			return {
				...state,
				modal: {
					...initialAppState.modal,
					...action.payload,
				},
			};
		case ACTION_TYPE.CLOSE_MODAL:
			return { ...initialAppState };
		case ACTION_TYPE.SET_NOT_FOUND_PRODUCTS:
			return { ...initialAppState, ...action.payload };
		case ACTION_TYPE.SET_SEARCH:
			return {
				...state,
				search: {
					...initialAppState.search,
					...action.payload,
				},
			};
		default:
			return state;
	}
};
