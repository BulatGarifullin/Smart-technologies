import { setSearch } from '../actions';

export const debounce = (delay, dispatch) => {
	let timeoutId;

	return (targetValue) => {
		clearTimeout(timeoutId);

		timeoutId = setTimeout(() => {
			dispatch(
				setSearch({
					searchPhrase: targetValue,
				}),
			);
		}, delay);
	};
};
