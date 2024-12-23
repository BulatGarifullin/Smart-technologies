import { ACTION_TYPE } from '../actions/action-type';

const initialState = {
	id: '',
	imageUrl: '',
	category: '',
	title: '',
	oldPrice: '',
	newPrice: '',
	discount: '',
	contentProduct: '',
	comments: [],
};

export const productReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
