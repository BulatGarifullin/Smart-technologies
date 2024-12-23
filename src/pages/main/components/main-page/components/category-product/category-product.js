import { useDispatch } from 'react-redux';
import { setIsLoadedProducts } from '../../../../../../actions';
import styled from 'styled-components';

const IconContainer = styled.div`
	margin: 0 10px 0 18px;
`;

const TextContainer = styled.div`
	font-size: 16px;
	weight: 500;
	line-height: 20.8px;
	cursor: pointer;
`;

const CategoryProductContainer = ({ className, id, name, IconComponent }) => {
	const dispatch = useDispatch();

	const onProductsUpdate = (categoryId) => {
		dispatch(setIsLoadedProducts({ isLoaded: true, categoryId: categoryId, categoryName: name }));
	};

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
