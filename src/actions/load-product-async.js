import { setProductData } from './set-product-data';

export const loadProductAsync = (requestServer, productId) => (dispatch) => {
	return requestServer('fetchProduct', productId).then((productData) => {
		if (productData.res) {
			dispatch(setProductData(productData.res));
		}
		return productData;
	});
};
