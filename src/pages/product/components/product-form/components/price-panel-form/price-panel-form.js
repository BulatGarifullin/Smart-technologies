import styled from 'styled-components';

const PricePanelFormContainer = ({
	className,
	oldPriceValue,
	newPriceValue,
	discountValue,
	discountInPercentValue,
	handleOldPriceChange,
	handleNewPriceChange,
	handleDiscountInPercentChange,
	handleDiscountChange,
}) => {
	return (
		<div className={className}>
			<label>
				Старая цена:
				<input value={oldPriceValue} type="number" min={1} onChange={({ target }) => handleOldPriceChange(target.value)} />
			</label>
			<label>
				Новая цена:
				<input value={newPriceValue} type="number" min={1} onChange={({ target }) => handleNewPriceChange(target.value)} />
			</label>
			<label>
				Скидка в %:
				<input
					value={discountInPercentValue}
					type="number"
					onChange={({ target }) => handleDiscountInPercentChange(target.value)}
				/>
			</label>
			<label>
				Скидка в ₽:
				<input value={discountValue} type="number" onChange={({ target }) => handleDiscountChange(target.value)} />
			</label>
		</div>
	);
};

export const PricePanelForm = styled(PricePanelFormContainer)`
	& {
		display: flex;
		justify-content: space-between;
	}

	& label {
		display: flex;
		column-gap: 10px;
	}
`;
