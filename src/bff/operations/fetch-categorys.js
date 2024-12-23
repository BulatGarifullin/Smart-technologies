import { getCategorys } from '../api';

export const fetchCategorys = async () => {
	const categorys = await getCategorys();

	if (!categorys) {
		return {
			error: 'Ошибка выполнения запроса',
			res: null,
		};
	}

	return {
		error: null,
		res: categorys,
	};
};
