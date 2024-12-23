import { Children, cloneElement, useEffect, useState } from 'react';
import { CAROUSEL_PAGE_WIDTH } from '../../../../../../constants';
import styled from 'styled-components';
import { Icon } from '../../../../../../components';
import { ReactComponent as LeftSVG } from '../../../../../../icons/left.svg';
import { ReactComponent as RightSVG } from '../../../../../../icons/right.svg';

const StyledIcon = styled(Icon)`
	position: absolute;
	z-index: 9;
	top: 50%;
`;

const CarouselContainer = ({ className, children }) => {
	const [pages, setPages] = useState([]);
	const [offset, setOffset] = useState(0);

	const handleLeftArrowClick = () => {
		setOffset((currentOffset) => {
			const newOffset = currentOffset + CAROUSEL_PAGE_WIDTH;
			return Math.min(newOffset, 0);
		});
	};

	const handleRightArrowClick = () => {
		setOffset((currentOffset) => {
			const newOffset = currentOffset - CAROUSEL_PAGE_WIDTH;
			return Math.max(newOffset, -1940);
		});
	};

	useEffect(() => {
		setPages(
			Children.map(children, (child) => {
				return cloneElement(child, {
					style: {
						height: '100%',
						minWidth: `${CAROUSEL_PAGE_WIDTH}px`,
						maxWidth: `${CAROUSEL_PAGE_WIDTH}px`,
					},
				});
			}),
		);
	}, []);

	return (
		<div className={className}>
			<div className="window">
				<StyledIcon IconComponent={LeftSVG} onClick={handleLeftArrowClick} />
				<div
					className="all-pages-container"
					style={{
						transform: `translateX(${offset}px)`,
					}}
				>
					{pages}
				</div>
				<StyledIcon IconComponent={RightSVG} onClick={handleRightArrowClick} />
			</div>
		</div>
	);
};

export const Carousel = styled(CarouselContainer)`
	width: 970px;
	display: flex;
	align-items: center;
	padding: 20px 0 0 0;

	& .window {
		position: relative;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	& .window > :nth-child(1) {
		left: 0;
		transform: translateY(-50%);
	}

	& .window > :nth-child(3) {
		right: 0;
		transform: translateY(-50%);
	}

	& .all-pages-container {
		height: 100%;
		display: flex;

		transition: translate;
		transition-property: transform;
		transition-duration: 300ms;
		transition-timing-function: ease-in-out;
	}
`;
