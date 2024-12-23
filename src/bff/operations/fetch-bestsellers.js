import { getProductsBestesellers } from '../api';

export const fetchBestsellers = async (searchPhrase) => {
	const bestsellers = await getProductsBestesellers(searchPhrase);

	if (!bestsellers) {
		return {
			error: 'Ошибка выполнения запроса',
			res: null,
		};
	}

	return {
		error: null,
		res: bestsellers,
	};
};
