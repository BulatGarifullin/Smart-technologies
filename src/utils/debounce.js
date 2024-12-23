import { setSearch } from '../actions';

export const debounce = (fn, delay, dispatch) => {
	let timeoutId;

	return (...args) => {
		const [flag, targetValue] = args;

		clearTimeout(timeoutId);

		timeoutId = setTimeout(() => {
			fn(flag);
			dispatch(
				setSearch({
					shouldSearch: flag,
					searchPhrase: targetValue,
				}),
			);
		}, delay);
	};
};
