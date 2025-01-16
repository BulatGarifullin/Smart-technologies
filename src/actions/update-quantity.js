import { ACTION_TYPE } from './action-type';

export const updateQuantity = (id, quantity) => ({
	type: ACTION_TYPE.UPDATE_QUANTITY,
	payload: { id, quantity },
});
