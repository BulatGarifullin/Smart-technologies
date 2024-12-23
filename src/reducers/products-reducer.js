import { ACTION_TYPE } from '../actions/action-type';

const initialState = {
	category: null,
	products: [],
};

export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_PRODUCTS_DATA: {
			return {
				...initialState,
				category: action.payload.at(0)?.categoryName || null,
				products: [...initialState.products, ...action.payload],
			};
		}
		case ACTION_TYPE.RESET_PRODUCTS: {
			return {
				...initialState,
			};
		}
		default:
			return state;
	}
};
