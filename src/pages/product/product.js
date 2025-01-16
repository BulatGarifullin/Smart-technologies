import { useEffect, useState } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useServerRequest } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_TYPE, loadProductAsync, setProductData } from '../../actions';
import { selectProduct } from '../../selectors';
import { Error, PrivateContent } from '../../components';
import { ROLE } from '../../constants';
import { ProductContent, ProductForm } from './components';
import { initialProductState } from '../../reducers';
import styled from 'styled-components';

const ProductContainer = ({ className }) => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [categorys, setCategorys] = useState([]);

	const params = useParams();
	const isCreating = !!useMatch('/product');
	const isEditing = !!useMatch('/product/:id/edit');
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const product = useSelector(selectProduct);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}

		Promise.all([requestServer('fetchProduct', params.id), requestServer('fetchCategorys')]).then(([productsData, categorysData]) => {
			dispatch(setProductData(productsData.res));
			setCategorys(categorysData.res);
			setError(productsData.error || categorysData.error);
			setIsLoading(false);
		});

		// dispatch(loadProductAsync(requestServer, params.id)).then((productData) => {
		// 	setError(productData.error);
		// 	setIsLoading(false);
		// });

		return () => {
			dispatch({ type: ACTION_TYPE.RESET_PRODUCT_DATA });
		};
	}, [requestServer, dispatch, params.id, isCreating]);

	if (isLoading) {
		return null;
	}

	const SpecificProductPage =
		isEditing || isCreating ? (
			<PrivateContent access={[ROLE.ADMIN]} serverError={error}>
				<ProductForm
					product={isEditing ? product : initialProductState}
					categorys={isCreating || isEditing ? categorys : undefined}
				/>
			</PrivateContent>
		) : (
			<div className={className}>
				<ProductContent product={product} />
			</div>
		);

	return error ? <Error error={error} /> : SpecificProductPage;
};

export const Product = styled(ProductContainer)`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;