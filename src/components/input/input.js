import { forwardRef } from 'react';
import styled from 'styled-components';

const InputContainer = forwardRef(({ className, ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
	width: ${({ width = '100%' }) => width};
	height: ${({ height = '100%' }) => height};
	margin: 0;
	font-size: 16px;
	line-height: 19.2px;
	color: ${({ color = '#838688' }) => color};
`;
