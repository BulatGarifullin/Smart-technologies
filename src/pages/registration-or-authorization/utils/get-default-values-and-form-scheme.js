import { authFormScheme, regFormScheme } from '../scheme-validations';

export const getDefaultValuesAndFormScheme = (isReg) => {
	const defaultValues = isReg
		? {
				login: '',
				password: '',
				passcheck: '',
			}
		: {
				login: '',
				password: '',
			};

	const formScheme = isReg ? regFormScheme : authFormScheme;

	return {
		defaultValues,
		formScheme,
	};
};
