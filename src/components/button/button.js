import styled from 'styled-components';

const ButtonContainer = ({ className, children, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
	font-weight: ${({ weight = 'normal' }) => weight};
	border: ${({ border = 'none' }) => border};
	width: ${({ width = '99px' }) => width};
	height: ${({ height = '48px' }) => height};
	margin: ${({ margin = '0' }) => margin};
	background-color: ${({ background = '#2A5275' }) => background};
	color: ${({ color = '#fff' }) => color};
	border-radius: 5px;

	&:hover {
		cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	}

	&:disabled {
		background-color: #a9b2ba;
	}
`;
