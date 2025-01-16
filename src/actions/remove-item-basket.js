import { ACTION_TYPE } from './action-type';

export const removeItemBasket = (id) => ({
	type: ACTION_TYPE.REMOVE_ITEM_BASKET,
	payload: id,
});
