import { ACTION_TYPE } from '../actions/action-type';

export const initialProductState = {
	id: '',
	imageUrl: '',
	categoryId: '',
	categoryName: '',
	title: '',
	oldPrice: '',
	newPrice: '',
	discount: '',
	discountInPercent: '',
	quantitySales: '',
	bestseller: '',
	contentProduct: '',
};

export const productReducer = (state = initialProductState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_PRODUCT_DATA:
			return {
				...state,
				...action.payload,
			};
		case ACTION_TYPE.RESET_PRODUCT_DATA:
			return { ...initialProductState };
		default:
			return state;
	}
};
