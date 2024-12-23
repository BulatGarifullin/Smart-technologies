import { ReactComponent as MenuIconSVG } from '../../icons/menu-icon.svg';
import { Icon } from '../icon/icon';
import { StyledLink } from '../styled-link/styled-link';
import styled from 'styled-components';

const NavigationContainer = ({ className }) => {
	return (
		<nav className={className}>
			<div className="nav">
				<div className="nav-title">
					<Icon IconComponent={MenuIconSVG} inactive={true} size="32px" margin="0 10px 0 0" />
					<div> Каталог товаров</div>
				</div>
				<div className="nav-link">
					<StyledLink to="">Акции</StyledLink>
					<StyledLink to="">Рассрочка 0|0|18</StyledLink>
					<StyledLink to="">Сервис и гарантия</StyledLink>
					<StyledLink to="">Опт/дропшиппинг</StyledLink>
					<StyledLink to="">Контакты</StyledLink>
				</div>
			</div>
		</nav>
	);
};

export const Navigation = styled(NavigationContainer)`
	position: fixed;
	top: 80px;
	left: 0;
	right: 0;
	height: 60px;
	background-color: #0e1821;
	color: #fff;
	z-index: 10;

	& .nav {
		width: 1300px;
		height: 100%;
		margin: 0 auto;
		display: flex;
	}

	& .nav-title {
		width: 310px;
		height: 100%;
		display: flex;
		padding: 0 0 0 18px;
		align-items: center;
		background-color: #243c53;
	}

	& .nav-link {
		width: 926px;
		display: flex;
		align-items: center;
		margin-left: 30px;
	}

	& .nav-link > * {
		margin-right: 40px;
	}
`;
