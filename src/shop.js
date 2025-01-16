import { Route, Routes } from 'react-router-dom';
import { Header, Navigation, Footer, Modal, Error, Plug } from './components';
import { Main, Product, Basket, ListOfProducts } from './pages';
import { useDispatch } from 'react-redux';
import { useLayoutEffect } from 'react';
import { setUser } from './actions';
import styled from 'styled-components';
import { ERROR } from './constants';

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const AppColumn = styled.div`
	width: 1300px;
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 auto;
	padding: 140px 0 0 0;
	background-color: #fff;
`;

export const Shop = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);
		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);

	return (
		<Container>
			<Header />
			<Navigation />
			<AppColumn>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/products/" element={<ListOfProducts />} />
					<Route path="/product/" element={<Product />} />
					<Route path="/product/:id" element={<Product />} />
					<Route path="/product/:id/edit" element={<Product />} />
					<Route path="/basket" element={<Basket />} />
					<Route path="/plug" element={<Plug />} />
					<Route path="/*" element={<Error error={ERROR.PAGE_NOT_EXIST} />} />
				</Routes>
			</AppColumn>
			<Footer />
			<Modal />
		</Container>
	);
};
