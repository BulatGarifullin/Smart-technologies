import { getProducts } from '../api';

export const fetchProducts = async (categoryId, searchPhrase) => {
	const products = await getProducts(categoryId, searchPhrase);

	return {
		error: null,
		res: products,
	};
};
