import { Button } from '../../../../components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToBasketItem } from '../../../../actions';
import { SpecialPanel } from './components/special-panel/special-panel';
import styled from 'styled-components';

const ProductContentContainer = ({ className, product }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id, imageUrl, title, oldPrice, newPrice } = product;

	const onBuyOneClick = () => {
		dispatch(addToBasketItem({ id, imageUrl, title, oldPrice, newPrice }));
		navigate('/basket');
	};

	const onAddToBasketClick = () => {
		dispatch(addToBasketItem({ id, imageUrl, title, oldPrice, newPrice }));
	};

	return (
		<div className={className}>
			<div className="product">
				<div className="product-image">
					<img src={product.imageUrl} alt={product.title} />
				</div>
				<div className="product-discription">
					<div className="product-title">{product.title}</div>
					<div className="product-info">
						<div className="product-price">
							<div className="product-discount-price">
								<div className="product-discount-old-price">{product.oldPrice}₽</div>
								<div className="product-discount-span">
									<span className="product-discount-in-percent">{product.discountInPercent}%</span>
									<span className="product-discount">-{product.discount}₽</span>
								</div>
							</div>
							<div className="product-newPrice">{product.newPrice} ₽</div>
						</div>
						<Button onClick={onAddToBasketClick} width="228px" weight={700} hoverColor="#4878A6">
							В корзину
						</Button>
						<Button
							onClick={onBuyOneClick}
							width="228px"
							background="#fff"
							border="1px solid #4878A6"
							color="#4878A6"
							weight={700}
							hoverColor="rgb(240, 240, 240)"
						>
							Купить в 1 клик
						</Button>
					</div>
					<SpecialPanel id={id} />
				</div>
			</div>
			<div className="info">
				<p className="info-text">Описание:</p>
				<p className="info-description">{product.contentProduct}</p>
			</div>
		</div>
	);
};

export const ProductContent = styled(ProductContentContainer)`
	& .product {
		margin: 40px 0;
		display: flex;
		justify-content: space-between;
	}

	& .product-image {
		margin: 0 20px 0 0;
	}

	& img {
		width: 530px;
		height: 460px;
	}

	& .product-discription {
		display: flex;
		flex-direction: column;
	}

	& .product-title {
		font-size: 36px;
		font-weight: 700;
		line-height: 46.8px;
		margin-bottom: 30px;
	}

	& .product-info {
		display: flex;
		align-items: center;
		border: 1px solid #eaeaf0;
		margin-bottom: 30px;
	}

	& .product-price {
		display: flex;
		flex-direction: column;
		margin: 20px 43px 20px 30px;
	}

	& .product-discount-price {
		display: flex;
		align-items: center;
	}

	& .product-discount-old-price {
		text-decoration: line-through;
		color: #838688;
		font-weight: 700;
		color: #838688;
		font-size: 16px;
		line-height: 20.8px;
		margin-right: 8px;
	}

	& .product-discount-span {
		background-color: #f37748;
		border-radius: 14px;
		padding: 5px 8px 5px 5px;
	}

	& .product-discount-in-percent {
		font-weight: 400;
		background-color: #fff;
		color: #000;
		border-radius: 10px;
		padding: 1px 4px;
		margin-right: 5px;
	}

	& .product-discount {
		color: #fff;
		font-weight: 700;
	}

	& .product-newPrice {
		font-weight: 700;
		font-size: 32px;
		line-height: 41.6px;
	}

	& .product-info Button:nth-child(2) {
		margin-right: 10px;
	}

	& .product-info Button:last-child {
		margin-right: 30px;
	}

	& .info-text {
		font-size: 28px;
		font-weight: 700;
		margin-bottom: 30px;
	}

	& .info-description {
		font-weight: 400;
		line-height: 19.2px;
		white-space: pre-wrap;
		margin-bottom: 80px;
	}

	p {
		margin: 0;
	}
`;
