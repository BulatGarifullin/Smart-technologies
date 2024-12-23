import { ACTION_TYPE } from './action-type';

export const setIsLoadedProducts = (loadedData) => ({
	type: ACTION_TYPE.SET_IS_LOADED_PRODUCTS,
	payload: loadedData,
});
