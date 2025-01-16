import styled from 'styled-components';

const IconContainer = ({ className, IconComponent, inactive, hoverColor, hoverIcon, ...props }) => {
	return (
		<div className={className} {...props}>
			<IconComponent />
		</div>
	);
};

export const Icon = styled(IconContainer)`
	display: inline-block;
	cursor: ${({ inactive }) => (inactive ? 'default' : 'pointer')};
	margin: ${({ margin = '0' }) => margin};
	user-select: none;

	svg {
		display: block;
		width: ${({ size = '38px' }) => size};
		height: ${({ size = '38px' }) => size};
		path {
			fill: ${({ color }) => color};
			stroke: ${({ color }) => color};
		}
	}

	&:hover {
		svg {
			rect {
				fill: ${({ hoverColor }) => hoverColor};
			}
			path {
				fill: ${({ hoverIcon }) => hoverIcon};
			}
		}
	}
`;
