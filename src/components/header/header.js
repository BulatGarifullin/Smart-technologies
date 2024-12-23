import styled from 'styled-components';
import { Logo, Discription, ControlPanel } from './components';

const HeaderContainer = ({ className }) => {
	return (
		<header className={className}>
			<div className="container">
				<Logo />
				<Discription />
				<ControlPanel />
			</div>
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 80px;
	background-color: #fff;
	z-index: 10;

	& .container {
		width: 1300px;
		height: 60px;
		margin: 10px auto;
		display: flex;
		justify-content: space-between;
	}
`;
