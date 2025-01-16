import styled from 'styled-components';
import { Icon, Img, Input } from '../../../../components';
import { ReactComponent as DeleteSVG } from '../../../../icons/delete.svg';
import { ReactComponent as MinusSVG } from '../../../../icons/minus.svg';
import { ReactComponent as PlusSVG } from '../../../../icons/plus.svg';
import { useDispatch } from 'react-redux';
import { removeItemBasket, updateQuantity } from '../../../../actions';

const ItemComtainer = ({ className, item }) => {
	const dispatch = useDispatch();
	const { id, imageUrl, title, oldPrice, newPrice, quantity } = item;

	const onRemoveItem = (id) => {
		dispatch(removeItemBasket(id));
	};

	const onDecreaseQuantity = () => {
		if (quantity > 1) {
			const newQuantity = Number(quantity - 1);
			dispatch(updateQuantity(id, newQuantity));
		}
	};

	const onIncreaseQuantity = () => {
		const newQuantity = Number(quantity + 1);
		dispatch(updateQuantity(id, newQuantity));
	};

	return (
		<div className={className}>
			<div className="item-image">
				<Img url={imageUrl} size="80px" />
			</div>
			<div className="item-title">{title}</div>
			<div className="item-quantity">
				<Icon
					IconComponent={MinusSVG}
					onClick={onDecreaseQuantity}
					size="20px"
					margin="0 6px 0 0"
					color={quantity === 1 ? '#C8CACB' : ''}
				/>
				<Input type="number" value={quantity} min={1} readOnly width="48px" height="48px" color="#000" />
				<Icon IconComponent={PlusSVG} onClick={onIncreaseQuantity} size="20px" margin="0 0 0 6px" />
			</div>
			<div className="item-price">
				<div className="old-price">{oldPrice}₽</div>
				<div className="new-price">{newPrice}₽</div>
			</div>
			<Icon IconComponent={DeleteSVG} onClick={() => onRemoveItem(id)} size="38px" />
		</div>
	);
};

export const Item = styled(ItemComtainer)`
	width: 800px;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& .item-title {
		max-width: 280px;
		font-weight: 400;
		font-size: 16px;
		line-height: 20.8px;
	}

	& .item-quantity {
		display: flex;
		justify-content: center;
		align-items: center;

		input {
			text-align: center;
			border: 1px solid #c8cacb;
			border-radius: 4px;

			&::-webkit-inner-spin-button,
			&::-webkit-outer-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}

			-moz-appearance: textfield; /* Для Firefox */
		}
	}

	& .item-price {
		display: flex;
		flex-direction: column;

		& .old-price {
			color: #838688;
			font-weight: 700;
			text-decoration: line-through;
		}

		& .new-price {
			font-weight: 700;
			color: #000;
			font-size: 24px;
		}
	}
`;
