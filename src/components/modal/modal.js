import { useSelector } from 'react-redux';
import { RegistrationOrAuthorization } from '../../pages';
import { selectModalIsAuthorization, selectModalIsOpen, selectModalIsRegistration } from '../../selectors';
import styled from 'styled-components';

const ModalContainer = ({ className }) => {
	const isOpen = useSelector(selectModalIsOpen);
	const isAuthorization = useSelector(selectModalIsAuthorization);
	const isRegistration = useSelector(selectModalIsRegistration);

	if (!isOpen) {
		return null;
	}

	if (!isRegistration && !isAuthorization) {
		return <div>Ошибка</div>;
	}

	return (
		<div className={className}>
			<div className="overlay"></div>
			{(isAuthorization || isRegistration) && <RegistrationOrAuthorization isRegistration={isRegistration} />}
		</div>
	);
};

export const Modal = styled(ModalContainer)`
	position: fixed;
	z-index: 10;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;

	& .overlay {
		position: absolute;
		background-color: rgba(102, 153, 204, 0.7);
		width: 100%;
		height: 100%;
	}
`;
