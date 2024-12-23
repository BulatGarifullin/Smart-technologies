export const transformSession = (dbSession) => ({
	id: dbSession.id,
	hash: dbSession.hash,
	user: {
		id: dbSession.user.id,
		login: dbSession.user.login,
		password: dbSession.user.password,
		registeredAt: dbSession.user.registered_at,
		roleId: dbSession.user.role_id,
	},
});
