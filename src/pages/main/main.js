import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Products, MainPage } from './components';
import { useServerRequest } from '../../hooks';
import { selectCategoryProductsId, selectCategoryProductsName, selectIsLoadedProducts, selectSearchPhrase } from '../../selectors';
import { useLoader } from '../../hooks/use-loader';
import { Loader } from '../../components';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const [categorysOfProducts, setCategorysOfProducts] = useState([]);
	const [listOfProducts, setListOfProducts] = useState([]);
	const [sortOrder, setSortOrder] = useState('asc');
	const { isLoading, setIsLoading } = useLoader();
	const requestServer = useServerRequest();

	const searchPhrase = useSelector(selectSearchPhrase);

	const isLoadedProducts = useSelector(selectIsLoadedProducts);
	const categoryId = useSelector(selectCategoryProductsId);
	const categoryName = useSelector(selectCategoryProductsName);

	const notFoundProducts = listOfProducts.length === 0 ? true : false;

	useEffect(() => {
		setIsLoading(true);
		requestServer('fetchProducts', categoryId, searchPhrase, sortOrder)
			.then(({ error, res }) => {
				setCategorysOfProducts(res.categorys);
				setListOfProducts(res.products);
			})
			.finally(() => setIsLoading(false));
	}, [isLoadedProducts, categoryId, requestServer, searchPhrase, sortOrder]);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<main className={className}>
			<MainPage categorys={categorysOfProducts} />
			{!notFoundProducts ? (
				<Products
					products={listOfProducts}
					category={categoryName}
					searchPhrase={searchPhrase}
					sortOrder={sortOrder}
					setSortOrder={setSortOrder}
				/>
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
