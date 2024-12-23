import { H1 } from '../../../../components';
import { ProductCard } from './components';
import styled from 'styled-components';

const BestsellersContainer = ({ className, products, category }) => {
	return (
		<section className={className}>
			{category ? (
				<H1 color="#000" weight="700" size={1}>
					{category}
				</H1>
			) : (
				<H1 color="#000" weight="700" size={1}>
					Хиты продаж
				</H1>
			)}
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

export const Bestsellers = styled(BestsellersContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 0 0 80px 0;

	& > h1 {
		margin: 0 0 40px 18px;
	}

	& .list-of-products {
		display: flex;
		flex-wrap: wrap;
	}
`;
