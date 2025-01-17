import styled from 'styled-components';
import { Icon, Input } from '../../../../components';
import { useRef, useState } from 'react';
import { ReactComponent as DeleteSVG } from '../../../../icons/delete.svg';
import { ReactComponent as SaveSVG } from '../../../../icons/save.svg';
import { PricePanelForm } from './components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../../../../hooks';
import { removeProductAsync, saveProductAsync } from '../../../../actions';
import { sanitizeContent } from '../../../../utils';

const ProductFormContainer = ({ className, product, categorys }) => {
	const { id, imageUrl, categoryId, categoryName, title, contentProduct, oldPrice, newPrice, discount, discountInPercent, bestseller } =
		product;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest();

	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitleValue] = useState(title);
	const [oldPriceValue, setOldPriceValue] = useState(oldPrice || 0);
	const [newPriceValue, setNewPriceValue] = useState(newPrice || 0);
	const [discountValue, setDiscountValue] = useState(discount || 0);
	const [discountInPercentValue, setDiscountInPercentValue] = useState(discountInPercent || 0);
	const [selectedCategoryId, setSelectedCategoryId] = useState(categoryId || '');
	const [selectedCategoryName, setSelectedCategoryName] = useState(categoryName || '');
	const [isBestsellerFlag, setIsBestsellerFlag] = useState(bestseller || false);

	const contentRef = useRef(null);

	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			saveProductAsync(requestServer, {
				id,
				imageUrl: imageUrlValue,
				categoryId: selectedCategoryId,
				categoryName: selectedCategoryName,
				title: titleValue,
				contentProduct: newContent,
				oldPrice: Number(oldPriceValue),
				newPrice: Number(newPriceValue),
				discount: Number(discountValue),
				discountInPercent: Number(discountInPercentValue),
				bestseller: isBestsellerFlag,
				quantitySales: Math.round(Math.random() * 100),
			}),
		).then(({ id }) => navigate(`/product/${id}`));
	};

	const onRemove = () => {
		dispatch(removeProductAsync(requestServer, id)).then(() => navigate('/'));
	};

	const handleOldPriceChange = (value) => {
		const parsedValue = Math.round(Number(value)) || 0;
		setOldPriceValue(parsedValue);

		const discountInRubles = (parsedValue * discountInPercentValue) / 100;
		const newPrice = parsedValue - discountInRubles;

		setDiscountValue(discountInRubles.toFixed(2));
		setNewPriceValue(newPrice.toFixed(2));
	};

	const handleNewPriceChange = (value) => {
		const parsedValue = Math.round(Number(value)) || 0;

		setNewPriceValue(parsedValue);

		const discountInRubles = oldPriceValue - parsedValue;
		const discountInPercent = (discountInRubles / oldPriceValue) * 100;

		setDiscountValue(discountInRubles.toFixed(2));
		setDiscountInPercentValue(discountInPercent.toFixed(2));
	};

	const handleDiscountInPercentChange = (value) => {
		const parsedValue = Math.round(Number(value)) || 0;

		setDiscountInPercentValue(parsedValue);

		const discountInRubles = (oldPriceValue * parsedValue) / 100;
		const newPrice = oldPriceValue - discountInRubles;

		setDiscountValue(discountInRubles.toFixed(2));
		setNewPriceValue(newPrice.toFixed(2));
	};

	const handleDiscountChange = (value) => {
		const parsedValue = Math.round(Number(value)) || 0;

		setDiscountValue(parsedValue);

		const newPrice = oldPriceValue - parsedValue;
		const discountInPercent = (parsedValue / oldPrice) * 100;

		setNewPriceValue(newPrice.toFixed(2));
		setDiscountInPercentValue(discountInPercent.toFixed(2));
	};

	return (
		<div className={className}>
			<div className="button-form">
				<Icon IconComponent={SaveSVG} size="25px" onClick={onSave} />
				<Icon IconComponent={DeleteSVG} size="25px" onClick={onRemove} />
			</div>
			<div className="product-form">
				<form>
					<fieldset>
						<legend>Данные о товаре</legend>
						<label>
							url:
							<Input
								value={imageUrlValue}
								placeholder="Изображение..."
								onChange={({ target }) => setImageUrlValue(target.value)}
								color="#000"
								height="40px"
							/>
						</label>
						<label>
							Наименование:
							<Input
								value={titleValue}
								placeholder="Наименование..."
								onChange={({ target }) => setTitleValue(target.value)}
								color="#000"
								height="40px"
							/>
						</label>
						<div className="product-form-panel">
							<label>
								Категория:
								<select
									value={selectedCategoryId}
									onChange={({ target }) => {
										setSelectedCategoryName(target.options[target.selectedIndex].text);
										setSelectedCategoryId(target.value);
									}}
								>
									<option value="">Выберите категорию</option>
									{categorys.map((category) => (
										<option key={category.id} value={category.id}>
											{category.name}
										</option>
									))}
								</select>
							</label>
							<label>
								Хит продаж:
								<input
									type="checkbox"
									checked={isBestsellerFlag}
									onChange={({ target }) => setIsBestsellerFlag(target.checked)}
								/>
							</label>
						</div>
						<PricePanelForm
							oldPriceValue={oldPriceValue}
							newPriceValue={newPriceValue}
							discountValue={discountValue}
							discountInPercentValue={discountInPercentValue}
							handleOldPriceChange={handleOldPriceChange}
							handleNewPriceChange={handleNewPriceChange}
							handleDiscountInPercentChange={handleDiscountInPercentChange}
							handleDiscountChange={handleDiscountChange}
						/>
					</fieldset>
				</form>
				<fieldset>
					<legend>Описание товара</legend>
					<div ref={contentRef} className="content-form" contentEditable={true} suppressContentEditableWarning={true}>
						{contentProduct}
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export const ProductForm = styled(ProductFormContainer)`
	& {
		margin-block: 20px;
	}

	& .button-form {
		display: flex;
		justify-content: end;
		margin-right: 20px;
		column-gap: 10px;
	}

	label:not(:last-child) ${Input} {
		margin-bottom: 10px;
	}

	& .product-form-panel {
		display: flex;
		gap: 0 10px;
		margin-bottom: 10px;

		label:first-child {
			display: flex;
			gap: 0 5px;
		}
	}

	& .content-form {
		outline: none;
	}
`;
