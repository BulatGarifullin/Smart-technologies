import { ACTION_TYPE } from './action-type';

export const setNotFoundProducts = (foundProductsFlag) => ({
	type: ACTION_TYPE.SET_NOT_FOUND_PRODUCTS,
	payload: foundProductsFlag,
});
