export const getTotalQuantityOfItems = (items) => {
	const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
	return totalQuantity || 0;
};
