import { CategoryProduct, Carousel } from './components';
import { getCategoryIcon } from '../../../../utils/get-category-icon';
import styled from 'styled-components';
import { Img } from '../../../../components';
import sliderImage from '../../../../images/slider.png';

const MainPageContainer = ({ className, categorys, searchPhrase }) => {
	return (
		<section className={className}>
			<div className="catalog">
				{categorys.map(({ id, name, iconKey }) => (
					<CategoryProduct key={id} id={id} name={name} IconComponent={getCategoryIcon(iconKey)} searchPhrase={searchPhrase} />
				))}
			</div>
			<div className="carousel">
				<Carousel>
					<Img url="https://fastly.picsum.photos/id/1/970/524.jpg?hmac=y7jKO_W8UsNyDhSKqEzFMTCXaHAo1RK-Dw1lzniGQpY" />
					<Img url="https://fastly.picsum.photos/id/280/970/524.jpg?hmac=VRCFwy5zguqNw8e2IGOVhgzfAltYOHii9GX9RWk4dmk" />
					<Img url="https://fastly.picsum.photos/id/911/970/524.jpg?hmac=V8WjSSogjrDoRhH5_fF-V88JEYfW9B9caaFNwb-eXxU" />
				</Carousel>
			</div>
		</section>
	);
};

export const MainPage = styled(MainPageContainer)`
	display: flex;
	margin: 0 0 40px 0;

	& .catalog {
		width: 310px;
		margin: 0 20px 0 0;
		padding: 8px 0;
		background-color: #edf2f6;
	}
`;
