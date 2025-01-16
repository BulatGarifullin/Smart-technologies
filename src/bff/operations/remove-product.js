import { ROLE } from '../../constants';
import { deleteProduct } from '../api';
import { sessions } from '../sessions';

export const removeProduct = async (hash, id) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	await deleteProduct(id);

	return {
		error: null,
		res: true,
	};
};
