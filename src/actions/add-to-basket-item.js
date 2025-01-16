import { ACTION_TYPE } from './action-type';

export const addToBasketItem = (basketData) => ({
	type: ACTION_TYPE.ADD_ITEM_BASKET,
	payload: basketData,
});
