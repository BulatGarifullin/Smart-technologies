import { transformBestsellersProducts } from '../transformers';

export const getProducts = (categoryId, searchPhrase) =>
	fetch(`http://localhost:3005/products?title_like=${searchPhrase}&category_id=${categoryId}`)
		.then((loadedProducts) => loadedProducts.json())
		.then((loadedProducts) => loadedProducts && loadedProducts.map(transformBestsellersProducts));
