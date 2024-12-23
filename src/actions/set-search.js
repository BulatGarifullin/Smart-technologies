import { ACTION_TYPE } from './action-type';

export const setSearch = (data) => ({
	type: ACTION_TYPE.SET_SEARCH,
	payload: data,
});
