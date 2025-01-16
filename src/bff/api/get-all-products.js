import { transformProducts } from '../transformers';

export const getAllProducts = (searchPhrase, sortOrder, allProductsFlag = null) =>
	!allProductsFlag
		? fetch(`http://localhost:3005/products?title_like=${searchPhrase}&_sort=new_price&_order=${sortOrder}`)
				.then((loadedProducts) => loadedProducts.json())
				.then((loadedProducts) => loadedProducts && loadedProducts.map(transformProducts))
		: fetch('http://localhost:3005/products')
				.then((loadedProducts) => loadedProducts.json())
				.then((loadedProducts) => loadedProducts && loadedProducts.map(transformProducts));
