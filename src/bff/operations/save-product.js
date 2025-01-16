import { ROLE } from '../../constants';
import { addProduct, updatedProduct } from '../api';
import { sessions } from '../sessions';

export const saveProduct = async (hash, newProductData) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}
	const savedProduct = newProductData.id === '' ? await addProduct(newProductData) : await updatedProduct(newProductData);

	return {
		error: null,
		res: savedProduct,
	};
};
