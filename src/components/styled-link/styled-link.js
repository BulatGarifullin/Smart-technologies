import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLinkContainer = ({ className, children, ...props }) => {
	return (
		<Link className={className} {...props}>
			{children}
		</Link>
	);
};

export const StyledLink = styled(StyledLinkContainer)`
	color: ${({ color = '#fff' }) => color};
`;
