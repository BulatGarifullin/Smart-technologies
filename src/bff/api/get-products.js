import { transformProducts } from '../transformers';

export const getProducts = (categoryId, sortOrder) =>
	fetch(`http://localhost:3005/products?category_id=${categoryId}&_sort=new_price&_order=${sortOrder}`)
		.then((loadedProducts) => loadedProducts.json())
		.then((loadedProducts) => loadedProducts && loadedProducts.map(transformProducts));

