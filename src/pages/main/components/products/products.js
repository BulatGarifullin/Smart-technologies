import { H1, Icon } from '../../../../components';
import { ProductCard } from './components';
import { ReactComponent as SortSVG } from '../../../../icons/sort.svg';
import styled from 'styled-components';

const ProductsContainer = ({ className, products, category, searchPhrase, sortOrder, setSortOrder }) => {
	return (
		<section className={className}>
			<div className="title">
				{searchPhrase ? (
					<H1 color="#000" weight="700" size={1}>
						{`Поиск по запросу: "${searchPhrase}"`}
					</H1>
				) : category ? (
					<H1 color="#000" weight="700" size={1}>
						{category}
					</H1>
				) : (
					<H1 color="#000" weight="700" size={1}>
						Хиты продаж
					</H1>
				)}
				{sortOrder && (
					<div className="sort">
						{sortOrder === 'asc' ? <div>По возрастанию</div> : <div>По убыванию</div>}
						<Icon IconComponent={SortSVG} onClick={() => setSortOrder((prevState) => (prevState === 'asc' ? 'desc' : 'asc'))} />
					</div>
				)}
			</div>

			<div className="list-of-products">
				{products.map(({ id, imageUrl, categoryName, title, oldPrice, newPrice, discount, discountInPercent, bestseller }) => (
					<ProductCard
						key={id}
						id={id}
						imageUrl={imageUrl}
						categoryName={categoryName}
						title={title}
						oldPrice={oldPrice}
						newPrice={newPrice}
						discountInPercent={discountInPercent}
						discount={discount}
						bestseller={bestseller}
					/>
				))}
			</div>
		</section>
	);
};

export const Products = styled(ProductsContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 0 0 80px 0;

	& > h1 {
		margin: 0 0 40px 18px;
	}

	& .title {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;

		& > div {
			margin-right: 10px;
		}
	}

	& .sort {
		display: flex;
		align-items: center;

		& > div:first-child {
			margin-right: 5px;
			font-weight: 600;
		}
	}

	& .list-of-products {
		display: flex;
		flex-wrap: wrap;
	}
`;
