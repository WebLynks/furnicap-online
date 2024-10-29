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
		return product.name === productName;
	});
};

export { getproduct, getTestimonials, getCategories, getProducts };
