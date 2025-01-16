import { transformProducts } from '../transformers';

export const getProduct = (productId) =>
	fetch(`http://localhost:3005/products/${productId}`)
		.then((res) => {
			if (res.ok) {
				return res;
			}

			const error = res.status === 404 ? 'Такая страница не существует' : 'Ошибка, которую мы не обрабатываем';

			return Promise.reject(error);
		})
		.then((loadedProduct) => loadedProduct.json())
		.then((loadedProduct) => loadedProduct && transformProducts(loadedProduct));
