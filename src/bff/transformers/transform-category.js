export const transformCategory = (dbCategory) => ({
	id: dbCategory.id,
	name: dbCategory.name,
	iconKey: dbCategory.icon_key,
});
