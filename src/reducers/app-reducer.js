import { ACTION_TYPE } from '../actions';

const initialAppState = {
	wasLogout: false,
	isLoadedProducts: {
		isLoaded: false,
		categoryId: null,
		categoryName: null,
	},
	modal: {
		isOpen: false,
		isAuthorization: false,
		isRegistration: false,
	},
	search: {
		searchPhrase: null,
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
		case ACTION_TYPE.SET_SEARCH:
			return {
				...state,
				search: {
					...initialAppState.search,
					...action.payload,
				},
			};
		case ACTION_TYPE.SET_IS_LOADED_PRODUCTS:
			return {
				...state,
				isLoadedProducts: {
					...initialAppState.isLoadedProducts,
					...action.payload,
				},
			};
		default:
			return state;
	}
};
