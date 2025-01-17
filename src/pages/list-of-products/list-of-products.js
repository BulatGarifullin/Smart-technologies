import styled from 'styled-components';
import { Button, H1, Loader, PrivateContent } from '../../components';
import { ProductItem } from './components';
import { ROLE } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../../hooks';
import { useEffect, useState } from 'react';
import { removeProductAsync } from '../../actions';
import { useDispatch } from 'react-redux';
import { useLoader } from '../../hooks/use-loader';

/* В идеале еще добавить пагинацию и  локальный поиск по списку товаров(м/у кнопкой и заголовком */

const ListOfProductsContainer = ({ className }) => {
	const [allProducts, setAllProducts] = useState([]);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const { isLoading, setIsLoading } = useLoader();

	const handleCreateNewProduct = () => navigate('/product');

	const onRemove = (id) => {
		dispatch(removeProductAsync(requestServer, id)).then((res) => {
			if (res) {
				setAllProducts((prevState) => prevState.filter((product) => product.id !== id));
			}
		});
	};

	useEffect(() => {
		setIsLoading(true);
		requestServer('fetchProducts', null, null, null, 'allProducts')
			.then(({ error, res }) => {
				setAllProducts(res.productsWithFlag);
			})
			.finally(() => setIsLoading(false));
	}, []);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<PrivateContent access={[ROLE.ADMIN]} serverError={null}>
			<div className={className}>
				<div className="list-of-products-title">
					<H1 size={2} color="#000">
						Список товаров:
					</H1>
					<Button width="100px" height="50px" hoverColor="rgba(102, 153, 204, 0.99);" onClick={handleCreateNewProduct}>
						Добавить
					</Button>
				</div>

				<ProductItem products={allProducts} onRemove={onRemove} />
			</div>
		</PrivateContent>
	);
};

export const ListOfProducts = styled(ListOfProductsContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 40px;

	& .list-of-products-title {
		width: 90%;
		display: flex;
		justify-content: end;
		align-items: center;
		margin-block: 10px;

		H2 {
			margin: 0 auto;
		}
	}

	& > Button {
		margin-block: 10px 10px;
	}
`;
