import { transformProducts } from '../transformers';

export const updatedProduct = ({
	id,
	imageUrl,
	title,
	contentProduct,
	oldPrice,
	newPrice,
	discount,
	discountInPercent,
	bestseller,
	quantitySales,
	categoryId,
	categoryName,
}) =>
	fetch(`http://localhost:3005/products/${id}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			image_url: imageUrl,
			title: title,
			content_product: contentProduct,
			old_price: oldPrice,
			new_price: newPrice,
			discount: discount,
			discount_in_percent: discountInPercent,
			bestseller: bestseller,
			quantity_sales: quantitySales,
			category_id: categoryId,
			category_name: categoryName,
		}),
	})
		.then((updatedProduct) => updatedProduct.json())
		.then((updatedProduct) => updatedProduct && transformProducts(updatedProduct));
