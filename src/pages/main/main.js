import { useEffect, useState } from 'react';
import { Bestsellers, MainPage } from './components';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoryOfProduct, selectNotFoundProducts, selectProducts, selectSearchPhrase, selectShouldSearch } from '../../selectors';

const MainContainer = ({ className }) => {
	const dispatch = useDispatch();
	const [categorysOfProducts, setCategorysOfProducts] = useState([]);
	const [listOfProducts, setListOfProducts] = useState([]);
	const requestServer = useServerRequest();
	const products = useSelector(selectProducts);
	const categoryOfProduct = useSelector(selectCategoryOfProduct);
	const notFoundProducts = useSelector(selectNotFoundProducts);
	const shouldSearch = useSelector(selectShouldSearch);
	const searchPhrase = useSelector(selectSearchPhrase);

	useEffect(() => {
		if (products.length === 0) {
			Promise.all([requestServer('fetchCategorys'), requestServer('fetchBestsellers', searchPhrase)]).then(
				([categorysRes, bestsellersRes]) => {
					setCategorysOfProducts(categorysRes.res);
					setListOfProducts(bestsellersRes.res);
				},
			);
		} else {
			setListOfProducts(products);
		}
	}, [dispatch, requestServer, products, shouldSearch]);

	return (
		<main className={className}>
			<MainPage categorys={categorysOfProducts} searchPhrase={searchPhrase} />
			{!notFoundProducts ? (
				<Bestsellers products={listOfProducts} category={categoryOfProduct} />
			) : (
				<div className="not-found-products">Товары, к сожалению, не найдены</div>
			)}
		</main>
	);
};

export const Main = styled(MainContainer)`
	width: 1300px;
	height: 100%;
	display: flex;
	flex-direction: column;

	& .not-found-products {
		font-size: 20px;
		margin: 0 auto 40px;
	}
`;
