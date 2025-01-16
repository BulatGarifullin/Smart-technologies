import { Input } from '../../../../components';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProductItemContainer = ({ className, products, onRemove }) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<div className="header">ID</div>
			<div className="header">Наименование</div>
			<div className="header">Категория</div>
			<div className="header">Стоимость</div>
			<div className="header">Скидка</div>
			<div className="header">URL</div>

			{products.map((product) => (
				<Fragment key={product.id}>
					<Input value={product.id} className="item" disabled={true} color="#000" />
					<Input value={product.title} className="item" disabled={true} color="#000" />
					<Input value={product.categoryName} className="item" disabled={true} color="#000" />
					<Input value={product.newPrice} className="item" disabled={true} color="#000" />
					<Input value={product.discount} className="item" disabled={true} color="#000" />
					<div className="item actions">
						<button className="edit-btn" onClick={() => navigate(`/product/${product.id}/edit`)}>
							✎
						</button>
						<button className="delete-btn" onClick={() => onRemove(product.id)}>
							❌
						</button>
					</div>
				</Fragment>
			))}
		</div>
	);
};

export const ProductItem = styled(ProductItemContainer)`
	width: 90%;
	gap: 15px 10px;
	display: grid;
	grid-template-columns: 2fr 10fr 3fr 2fr 2fr 2fr;

	& .header {
		display: flex;
		justify-content: center;
		font-weight: 600;
		padding-block: 5px;
		background-color: #76ff6e;
		border: 1px solid black;
	}

	& .item {
		width: 100%;
		height: 100%;
		padding-block: 5px;
		background-color: rgba(102, 153, 204, 0.6);
		text-align: center;
		border-radius: 5px;
	}

	& .actions {
		display: flex;
		justify-content: center;
		gap: 20px;
	}
`;
