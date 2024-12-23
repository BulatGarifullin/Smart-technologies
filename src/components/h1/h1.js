import styled from 'styled-components';

const H1Container = ({ className, children, size = 1 }) => {
	const Tag = `h${size}`;
	return <Tag className={className}>{children}</Tag>;
};

export const H1 = styled(H1Container)`
	color: ${({ color = '#838688' }) => color};
	font-weight: ${({ weight = '600' }) => weight};
	margin: ${({ margin = '0' }) => margin};
`;
