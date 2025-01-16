import styled from 'styled-components';
import { Button, H1 } from '../../components';
import { useSelector } from 'react-redux';
import { Item } from './components';
import { selectBasket } from '../../selectors';
import { getTotalQuantityOfItems } from './utils';
import { useNavigate } from 'react-router-dom';

const BasketContainer = ({ className }) => {
	const navigate = useNavigate();
	const basket = useSelector(selectBasket);
	const { items, totalPrice } = basket;

	return (
		<div className={className}>
			<H1 size={2} color="#000" weight={700} margin="0 0 20px 0">
				Оформление заказа
			</H1>
			<div className="basket">
				<div className="description-basket">
					<div className="order">
						<H1 size={3} color="#000" weight={700} margin="30px 0">
							Ваш заказ
						</H1>
						{items.map((item) => (
							<Item key={item.id} item={item} />
						))}
					</div>
				</div>
				<div className="sum-basket">
					<div className="cost-items">
						<span>{getTotalQuantityOfItems(items)} товаров на сумму:</span>
						<span>{totalPrice}₽</span>
					</div>
					<div className="cost-delivery">
						<span>Стоимость доставки:</span>
						<span>бесплатно</span>
					</div>
					<div className="cost-to-pay">
						<span>Итого:</span>
						<span>{totalPrice} ₽</span>
					</div>
					<Button width="100%" hoverColor="#4878A6" onClick={() => navigate('/plug')}>
						Оформить заказ
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Basket = styled(BasketContainer)`
	width: 100%;
	padding: 60px 0 60px 0;
	display: flex;
	flex-direction: column;

	& .basket {
		display: flex;
		justify-content: space-between;
	}

	& .description-basket {
		width: 100%;
	}

	& .order {
		padding: 0 30px 30px 30px;
		border: 1px solid #c8cacb;
		border-radius: 8px;
	}

	& .order > div:not(:last-child) {
		margin-bottom: 60px;
	}

	& .order > div:not(:last-child)::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: #ccc;
		top: 135%;
		bottom: 0;
	}

	& .sum-basket {
		width: 100%;
		border-radius: 8px;
		margin-left: 20px;
		background-color: #edf2f6;
		padding: 30px;
	}

	& .cost-items {
		display: flex;
		justify-content: space-between;
		font-size: 20px;
		margin-bottom: 20px;

		& > span:first-child {
			color: #838688;
		}
	}

	& .cost-delivery {
		font-size: 20px;
		display: flex;
		justify-content: space-between;
		margin-bottom: 60px;

		& > span:first-child {
			color: #838688;
		}
	}

	& .cost-to-pay {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 20px;
		margin-bottom: 24px;

		& > span:first-child {
			font-weight: 700;
		}

		& > span:last-child {
			font-weight: 700;
		}
	}
`;
