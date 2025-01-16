import { ACTION_TYPE } from '../actions';

const initialBasketState = {
	items: [],
	totalPrice: 0,
};

export const basketReducer = (state = initialBasketState, action) => {
	switch (action.type) {
		case ACTION_TYPE.ADD_ITEM_BASKET:
			const existingItem = state.items.find((item) => item.id === action.payload.id);

			if (existingItem) {
				const updatedItems = state.items.map((item) =>
					item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item,
				);

				return {
					...state,
					items: updatedItems,
					totalPrice: state.totalPrice + action.payload.newPrice,
				};
			}

			return {
				...state,
				items: [...state.items, { ...action.payload, quantity: 1 }],
				totalPrice: state.totalPrice + action.payload.newPrice,
			};
		case ACTION_TYPE.REMOVE_ITEM_BASKET:
			const itemToRemove = state.items.find((item) => item.id === action.payload);
			const filteredItems = state.items.filter((item) => item.id !== action.payload);
			return {
				...state,
				items: filteredItems,
				totalPrice: state.totalPrice - itemToRemove.newPrice * itemToRemove.quantity,
			};
		case ACTION_TYPE.UPDATE_QUANTITY:
			const { id, quantity } = action.payload;
			const itemToUpdate = state.items.find((item) => item.id === id);

			if (!itemToUpdate) return state;

			const updatedItemsQuantity = state.items.map((item) => (item.id === id ? { ...item, quantity } : item));

			const updatedTotalPrice = state.totalPrice + (quantity - itemToUpdate.quantity) * itemToUpdate.newPrice;

			return {
				...state,
				items: updatedItemsQuantity,
				totalPrice: updatedTotalPrice,
			};
		default:
			return state;
	}
};
