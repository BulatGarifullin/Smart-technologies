import styled from 'styled-components';
import { H1 } from '../h1/h1';

const PlugContainer = ({ className }) => {
	return (
		<div className={className}>
			<H1 size={2} color="#000">
				Это заглушка
			</H1>
		</div>
	);
};

export const Plug = styled(PlugContainer)`
	height: calc(100vh - 535px);
	display: flex;
	justify-content: center;
	align-items: center;
`;
