import { Route, Routes } from 'react-router-dom';
import { Header, Navigation, Footer, Modal } from './components';
import { Main } from './pages';
import { useDispatch } from 'react-redux';
import { useLayoutEffect } from 'react';
import { setUser } from './actions';
import styled from 'styled-components';

const AppColumn = styled.div`
	width: 1300px;
	min-height: 100%;
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
		<>
			<Header />
			<Navigation />
			<AppColumn>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/post" element={<div>Какая-то страница</div>}></Route>
				</Routes>
			</AppColumn>
			<Footer />
			<Modal />
		</>
	);
};
