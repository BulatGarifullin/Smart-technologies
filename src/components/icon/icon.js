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

	svg {
		display: block;
		width: ${({ size = '38px' }) => size};
		height: ${({ size = '38px' }) => size};
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
