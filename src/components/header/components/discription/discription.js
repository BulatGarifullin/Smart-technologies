import styled from 'styled-components';

const DiscriptionContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className="phone-1">+7 (812) 660-50-54</div>
			<div className="phone-2">+7 (958) 111-95-03</div>
			<div className="working-hours">Пн-вс: с 10:00 до 21:00</div>
		</div>
	);
};

export const Discription = styled(DiscriptionContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;

	& .phone-2 {
		margin: 0 20px 0 23px;
	}

	& .working-hours {
		color: #838688;
	}
`;
