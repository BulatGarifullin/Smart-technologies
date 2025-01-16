import styled from 'styled-components';
import { H1 } from '../h1/h1';

const ErrorContainer = ({ className, error }) =>
	error && (
		<div className={className}>
			<H1 size={2}>Ошибка</H1>
			<div>{error}</div>
		</div>
	);

export const Error = styled(ErrorContainer)`
	// height: 100%;
	height: calc(100vh - 535px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 18px;
`;
