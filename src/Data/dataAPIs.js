import PRODUCTS from './products';
import CATEGORIES from './categories';
import TESTIMONIALS from './testimonials';

const getProducts = () => {
	return PRODUCTS;
};

const getCategories = () => {
	return CATEGORIES;
};

const getTestimonials = () => {
	return TESTIMONIALS;
};

const getproduct = (productName) => {
	return PRODUCTS.find((product) => {
		return product.product_name === productName;
	});
};

const getProductWithEachCategory = () => {
	const productsWithEachCategory = {};
	CATEGORIES.forEach((category) => {
		productsWithEachCategory[category.name] = PRODUCTS.find((product) => {
			return product.category === category.name;
		});
	});
	return Object.values(productsWithEachCategory);
};

export {
	getproduct,
	getTestimonials,
	getCategories,
	getProducts,
	getProductWithEachCategory,
};
