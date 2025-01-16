import { transformProducts } from '../transformers';

export const addProduct = ({
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
	fetch('http://localhost:3005/products', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			image_url: imageUrl,
			category_id: categoryId,
			category_name: categoryName,
			title: title,
			old_price: oldPrice,
			new_price: newPrice,
			discount: discount,
			discount_in_percent: discountInPercent,
			quantity_sales: quantitySales,
			bestseller: bestseller,
			content_product: contentProduct,
		}),
	})
		.then((createdProduct) => createdProduct.json())
		.then((createdProduct) => createdProduct && transformProducts(createdProduct));
