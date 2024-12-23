import { transformCategory } from '../transformers';

export const getCategorys = () =>
	fetch('http://localhost:3005/categorys')
		.then((loadedRoles) => loadedRoles.json())
		.then((loadedRoles) => loadedRoles && loadedRoles.map(transformCategory));
