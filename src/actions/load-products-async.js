import { closeModal } from './close-modal';
import { setProductsData } from './set-products-data';

export const loadProductsAsync = (requestServer, categoryId, searchPhrase) => (dispatch) =>
	requestServer('fetchProducts', categoryId, searchPhrase).then((productsData) => {
		// dispatch(closeModal());
		return dispatch(setProductsData(productsData.res));
	});
