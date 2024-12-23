export const transformProducts = (dbBestseller) => ({
	id: dbBestseller.id,
	imageUrl: dbBestseller.image_url,
	categoryId: dbBestseller.category_id,
	categoryName: dbBestseller.category_name,
	title: dbBestseller.title,
	oldPrice: dbBestseller.old_price,
	newPrice: dbBestseller.new_price,
	discount: dbBestseller.discount,
	discountInPercent: dbBestseller.discount_in_percent,
	quantitySales: dbBestseller.quantity_sales,
	bestseller: dbBestseller.bestseller,
	contentProduct: dbBestseller.content_product,
});
