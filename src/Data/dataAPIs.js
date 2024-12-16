import PRODUCTS from './products';
import CATEGORIES from './categories';
import CATALOGUES from './catalogues';
import TESTIMONIALS from './testimonials';

const getProducts = () => {
	return PRODUCTS;
};

const getCategories = () => {
	return CATEGORIES;
};

const getCatalogues = () => {
	return CATALOGUES;
};

const getTestimonials = () => {
	// return 6 random testimonials but don't repeat one already included
	const randomTestimonials = [];
	const usedIndexes = [];
	while (randomTestimonials.length < 6) {
		const randomIndex = Math.floor(Math.random() * TESTIMONIALS.length);
		if (!usedIndexes.includes(randomIndex)) {
			randomTestimonials.push(TESTIMONIALS[randomIndex]);
			usedIndexes.push(randomIndex);
		}
	}

	return randomTestimonials;
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

const getFourRandomProductImages = () => {
	// getFourRandomProductImages without any duplicate images
	const productImages = [];
	while (productImages.length < 4) {
		const randomIndex = Math.floor(Math.random() * PRODUCTS.length);
		const randomProduct = PRODUCTS[randomIndex];
		if (!productImages.includes(randomProduct.image)) {
			productImages.push(randomProduct.image);
		}
	}
	return productImages;
};

export {
	getproduct,
	getTestimonials,
	getCategories,
	getCatalogues,
	getProducts,
	getProductWithEachCategory,
	getFourRandomProductImages,
};
