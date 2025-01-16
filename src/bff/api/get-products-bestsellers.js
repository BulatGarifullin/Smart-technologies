import { transformProducts } from '../transformers';
import { IS_BESTSELLER } from '../../constants';

export const getProductsBestesellers = (sortOrder) => {
	return fetch(`http://localhost:3005/products?bestseller=${IS_BESTSELLER}&_sort=new_price&_order=${sortOrder}`)
		.then((loadedBestsellers) => loadedBestsellers.json())
		.then((loadedBestsellers) => loadedBestsellers && loadedBestsellers.map(transformProducts));
};
