import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Bestsellers, MainPage } from './components';
import { useServerRequest } from '../../hooks';
import {
	selectCategoryProductsId,
	selectCategoryProductsName,
	selectIsLoadedProducts,
	selectSearchPhrase,
	selectShouldSearch,
} from '../../selectors';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const [categorysOfProducts, setCategorysOfProducts] = useState([]);
	const [listOfProducts, setListOfProducts] = useState([]);
	const requestServer = useServerRequest();

	const shouldSearch = useSelector(selectShouldSearch);
	const searchPhrase = useSelector(selectSearchPhrase);

	const isLoadedProducts = useSelector(selectIsLoadedProducts);
	const categoryId = useSelector(selectCategoryProductsId);
	const categoryName = useSelector(selectCategoryProductsName);

	const notFoundProducts = listOfProducts.length === 0 ? true : false;

	useEffect(() => {
		if (!isLoadedProducts) {
			Promise.all([requestServer('fetchCategorys'), requestServer('fetchBestsellers', searchPhrase)]).then(
				([categorysRes, bestsellersRes]) => {
					setCategorysOfProducts(categorysRes.res);
					setListOfProducts(bestsellersRes.res);
				},
			);
		} else {
			requestServer('fetchProducts', categoryId, searchPhrase).then((productsRes) => setListOfProducts(productsRes.res));
		}
		/* В будущем добавить:
		   Если у нас shouldSearch === true, тогда мы делаем запрос ко всей базе данных с SearchPhrase.
		   А поиск по категориям и топ-продаж уже не будет работать/
		   requestServer('fetchAllProducts', searchPhrase).then((allProductsRes) => setListOfProducts(productsRes.res));
		*/
	}, [isLoadedProducts, categoryId, requestServer, shouldSearch, searchPhrase]);

	return (
		<main className={className}>
			<MainPage categorys={categorysOfProducts} />
			{!notFoundProducts ? (
				<Bestsellers products={listOfProducts} category={categoryName} />
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
