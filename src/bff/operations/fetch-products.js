import { getProducts, getAllProducts, getCategorys, getProductsBestesellers } from '../api';

export const fetchProducts = async (categoryId = null, searchPhrase = null, sortOrder = null, allProductsFlag = null) => {
	if (allProductsFlag) {
		const productsWithFlag = await getAllProducts(searchPhrase, sortOrder, allProductsFlag);
		return {
			error: null,
			res: { productsWithFlag },
		};
	}

	const categorys = await getCategorys();
	const products = searchPhrase
		? await getAllProducts(searchPhrase, sortOrder)
		: categoryId
			? await getProducts(categoryId, sortOrder)
			: await getProductsBestesellers(sortOrder);

	return {
		error: null,
		res: { categorys, products },
	};
};
