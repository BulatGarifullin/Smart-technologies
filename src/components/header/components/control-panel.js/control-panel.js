import { ReactComponent as CartSVG } from '../../../../icons/cart.svg';
import { ReactComponent as CompareSVG } from '../../../../icons/compare.svg';
import { ReactComponent as EyeSVG } from '../../../../icons/eye.svg';
import { ReactComponent as LikeSVG } from '../../../../icons/like.svg';
import { ReactComponent as SignSVG } from '../../../../icons/sign in.svg';
import { StyledLink, Button, Icon } from '../../../';
import { useState } from 'react';
import { Search } from './components';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logout, openModal } from '../../../../actions';
import { selectUserRole, selectUserSession } from '../../../../selectors';
import { ROLE } from '../../../../constants';

const ControlPanelContainer = ({ className }) => {
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const session = useSelector(selectUserSession);

	const onAuthorize = () => {
		dispatch(
			openModal({
				isOpen: true,
				isAuthorization: true,
			}),
		);
	};

	const onLogout = () => {
		dispatch(logout(session));
		sessionStorage.removeItem('userData');
	};

	return (
		<div className={className}>
			<Search />
			<StyledLink>
				<Icon IconComponent={EyeSVG} size="48px" />
			</StyledLink>

			<StyledLink>
				<Icon IconComponent={LikeSVG} size="48px" />
			</StyledLink>

			<StyledLink>
				<Icon IconComponent={CompareSVG} size="48px" />
			</StyledLink>

			<StyledLink>
				<Icon IconComponent={CartSVG} size="48px" />
			</StyledLink>

			{roleId === ROLE.GUEST ? (
				<Button onClick={onAuthorize} margin="0 0 0 20px">
					Войти
				</Button>
			) : (
				<>
					<div className="sign">
						<Icon IconComponent={SignSVG} size="48px" />
						<div className="sign-content" onClick={onLogout}>
							Выйти
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	justify-content: center;
	align-items: center;

	& .sign {
		display: flex;
	}

	& .sign-content {
		margin: auto 0;
		cursor: pointer;
	}
`;
