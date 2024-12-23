import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadProductsAsync, setNotFoundProducts } from '../../../../../../actions';
import { useServerRequest } from '../../../../../../hooks';
import { selectSearchPhrase } from '../../../../../../selectors';
import { useEffect } from 'react';

const IconContainer = styled.div`
	margin: 0 10px 0 18px;
`;

const TextContainer = styled.div`
	font-size: 16px;
	weight: 500;
	line-height: 20.8px;
	cursor: pointer;
`;

const CategoryProductContainer = ({ className, id, name, IconComponent, searchPhrase }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onProductsUpdate = (categoryId) => {
		dispatch(loadProductsAsync(requestServer, categoryId, searchPhrase)).then((loadProducts) => {
			console.log(loadProducts);
			if (loadProducts.payload.length === 0) {
				dispatch(setNotFoundProducts({ notFoundProducts: true }));
			}
		});
	};

	// useEffect(() => {
	// 	onProductsUpdate(id);
	// }, [searchPhrase]);

	return (
		<div className={className}>
			<IconContainer>
				<IconComponent />
			</IconContainer>
			<TextContainer onClick={() => onProductsUpdate(id)}>{name}</TextContainer>
		</div>
	);
};

export const CategoryProduct = styled(CategoryProductContainer)`
	width: 100%;
	height: 48px;
	display: flex;
	align-items: center;
`;
