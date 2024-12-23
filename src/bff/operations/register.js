import { addUser, getUser } from '../api';
import { sessions } from '../sessions';

export const register = async (regLogin, regPassword, regPasswordCheck) => {
	const existedUser = await getUser(regLogin);

	if (existedUser) {
		return {
			error: 'Такой логин уже занят',
			res: null,
		};
	}

	if (regPassword !== regPasswordCheck) {
		return {
			error: 'Пароли не совпадают',
			res: null,
		};
	}

	const user = await addUser(regLogin, regPassword);

	return {
		error: null,
		res: {
			id: user.id,
			login: user.login,
			roleId: user.role_id,
			session: sessions.create(user),
		},
	};
};
