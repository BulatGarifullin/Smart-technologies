import styled from 'styled-components';
import { Button, StyledLink } from '../../../../../../components';
import { ReactComponent as BasketSVG } from '../../../../../../icons/basket.svg';
import { Icon } from '../../../../../../components/icon/icon';
import { useDispatch } from 'react-redux';
import { addToBasketItem } from '../../../../../../actions';
import { useNavigate } from 'react-router-dom';

const CardInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
`;

const ProductCardContainer = ({
	className,
	id,
	imageUrl,
	categoryName,
	title,
	oldPrice,
	newPrice,
	discountInPercent,
	discount,
	bestseller,
}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onBuyOneClick = () => {
		dispatch(addToBasketItem({ id, imageUrl, title, oldPrice, newPrice }));
		navigate('/basket');
	};

	const addToBasket = () => {
		dispatch(addToBasketItem({ id, imageUrl, title, oldPrice, newPrice }));
	};

	return (
		<div className={className}>
			<StyledLink to={`/product/${id}`}>
				<img src={imageUrl} alt="card" width="286px" height="224px" />
			</StyledLink>

			<div className="product-card">
				<div className="product-card_category">{categoryName}</div>
				<StyledLink to={`/product/${id}`} color="#000">
					<div className="product-card_title">{title}</div>
				</StyledLink>
				<CardInfo>
					<div className="product-card_old-price">{oldPrice}</div>
					<div className="product-card_new-price">{newPrice} ₽</div>
					<div className="product-card_discount">
						<span>{discountInPercent}</span>
						<span>- {discount} ₽</span>
					</div>
				</CardInfo>
				<div className="product-card_buy">
					<Button
						onClick={onBuyOneClick}
						hoverColor="rgb(240, 240, 240)"
						width="228px"
						height="48px"
						background="#fff"
						border="1px solid #4878A6"
						color="#4878A6"
						weight="600"
					>
						Купить в 1 клик
					</Button>
					<Icon onClick={addToBasket} IconComponent={BasketSVG} hoverColor="#2A5275" size="48px" />
				</div>
			</div>
			{bestseller ? <div className="bestseller">Хит продаж</div> : null}
		</div>
	);
};
export const ProductCard = styled(ProductCardContainer)`
	max-width: 325px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	border: 1px solid #eaeaf0;

	& img {
		width: 286px;
		height: 224px;
	}

	& > a {
		line-height: 0;
		margin-bottom: 10px;
	}

	& .product-card {
	}

	& .product-card_category {
		font-size: 16px;
		color: #838688;
		line-height: 20.8px;
	}

	& .product-card_title {
		line-height: 26px;
		font-size: 20px;
		margin: 10px 0 20px 0;
		min-height: 78px;
		display: flex;
		align-items: center;
	}

	& .product-card_old-price {
		color: #838688;
		text-decoration: line-through;
		font-size: 16px;
		line-height: 20.8px;
	}

	& .product-card_new-price {
		font-size: 24px;
		line-height: 31.2px;
		font-weight: 700;
	}

	.product-card_discount {
		display: flex;
		align-items: center;
		background-color: #f37045;
		border-radius: 20px;
		padding: 5px 15px;
		color: #fff;
		font-size: 14px;
	}

	& .product-card_discount span:first-child {
		background-color: #fff;
		color: #000;
		border-radius: 10px;
		padding: 1px 5px;
		margin-right: 8px;
	}

	& .product-card_discount span:last-child {
		color: #fff;
		font-weight: bold;
	}

	& .product-card_buy {
		display: flex;
		justify-content: space-between;
	}

	& .bestseller {
		width: 122px;
		height: 31px;
		position: absolute;
		left: 18px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
		background-color: #d73838;
		color: #fff;
		font-size: 16px;
		line-height: 20.8px;
	}
`;
