import { useDispatch } from 'react-redux';
import { ReactComponent as Logotype } from '../../../../icons/logo.svg';
import { StyledLink } from '../../../styled-link/styled-link';
import styled from 'styled-components';
import { resetProducts } from '../../../../actions';

const LogoContainer = ({ className }) => {
	const dispatch = useDispatch();
	const onResetProducts = () => dispatch(resetProducts());

	return (
		<StyledLink to="/" onClick={onResetProducts}>
			<div className={className}>
				<Logotype />
			</div>
		</StyledLink>
	);
};

export const Logo = styled(LogoContainer)`
	display: flex;
	justify-content: center;
	align-items: center;

	& :hover {
		cursor: pointer;
	}
`;
