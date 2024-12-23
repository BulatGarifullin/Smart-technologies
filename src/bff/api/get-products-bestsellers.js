import { transformBestsellersProducts } from '../transformers';
import { IS_BESTSELLER } from '../../constants';

export const getProductsBestesellers = (searchPhrase) => {
	return fetch(`http://localhost:3005/products?title_like=${searchPhrase}&bestseller=${IS_BESTSELLER}`)
		.then((loadedBestsellers) => loadedBestsellers.json())
		.then((loadedBestsellers) => loadedBestsellers && loadedBestsellers.map(transformBestsellersProducts));
};
