import { ReactComponent as DeliverySVG } from '../../../../../../icons/delivery.svg';
import { ReactComponent as PaymentSVG } from '../../../../../../icons/payment.svg';
import { ReactComponent as DeleteSVG } from '../../../../../../icons/delete.svg';
import { ReactComponent as editSVG } from '../../../../../../icons/edit.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../../../../components';
import { selectUserRole } from '../../../../../../selectors';
import { ROLE } from '../../../../../../constants';
import { checkAccess } from '../../../../../../utils';
import { removeProductAsync } from '../../../../../../actions';
import styled from 'styled-components';
import { useServerRequest } from '../../../../../../hooks';
import { useNavigate } from 'react-router-dom';

const SpecialPanelContainer = ({ className, id }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest();

	const roleId = useSelector(selectUserRole);

	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	const onRemove = () => {
		dispatch(removeProductAsync(requestServer, id)).then(() => navigate('/'));
	};

	return (
		<div className={className}>
			<div className="special-panel">
				<div className="delivery-info">
					<Icon IconComponent={DeliverySVG} size="24px" inactive={true} />
					<div className="delivery">
						<p>Доставка</p>
						<p className="text">
							Доставим по Санкт-Петербургу в течение <br /> 2 часов и бесплатно. Стоимость доставки <br /> в другие города
							уточняйте у менеджера.
						</p>
					</div>
				</div>
				<div className="payment-info">
					<Icon IconComponent={PaymentSVG} size="24px" inactive={true} />
					<div className="payment">
						<p>Оплата</p>
						<p className="text">
							Принимаем к оплате как наличный, <br /> так и безналичный расчет. Возможна <br /> оплата электронными
							кошельками.
						</p>
					</div>
				</div>
			</div>
			{isAdmin && (
				<fieldset>
					<legend>Админ панель</legend>
					<div className="special-panel-buttons">
						<Icon IconComponent={editSVG} size="25px" onClick={() => navigate(`/product/${id}/edit`)} />
						<Icon IconComponent={DeleteSVG} size="25px" onClick={onRemove} />
					</div>
				</fieldset>
			)}
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	flex-direction: column;
	row-gap: 10px;

	& .special-panel {
		display: flex;
	}

	& .delivery-info {
		display: flex;
		margin-right: 20px;

		div:first-child {
			margin-right: 10px;
		}
	}

	& .payment-info {
		display: flex;

		div:first-child {
			margin-right: 10px;
		}
	}

	& .delivery p:first-child,
	.payment p:first-child {
		font-weight: 700;
		color: #070c11;
		margin-bottom: 10px;
	}

	& .text {
		width: 331px;
	}

	& fieldset {
		width: 50%;
	}

	& .special-panel-buttons {
		column-gap: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
