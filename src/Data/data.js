const PRODUCTS = [
	{
		name: 'Luxury Sofa',
		category: 'Sofa',
		price: '16000',
		image: 'luxury_sofa',
	},
	{
		name: 'Luxury Leather Sofa',
		category: 'Sofa',
		price: '29000',
		image: 'luxury_leather_sofa',
	},
	{
		name: 'Revolving Chair',
		category: 'Chair',
		price: '8400',
		image: 'revolving_chair',
	},
	{
		name: 'Computer Table',
		category: 'Wood Table',
		price: '12000',
		image: 'computer_table',
	},
	{
		name: 'Staff Lockers',
		category: 'Locker',
		price: '10000',
		image: 'staff_lockers',
	},
	{
		name: 'Executive Conference Table',
		category: 'Conference Table',
		price: '54000',
		image: 'conference_table',
	},
];

const CATEGORIES = [
	{
		name: 'Wood Table',
		image: 'wood_table_category',
	},
	{
		name: 'Work Station',
		image: 'work_station_category',
	},
	{
		name: 'Conference Table',
		image: 'conference_table_category_image',
	},
	{
		name: 'Sofa',
		image: 'sofa_category',
	},
	{
		name: 'Locker',
		image: 'staff_lockers_category',
	},
	{
		name: 'Chair',
		image: 'chair_category',
	},
];

const TESTIMONIALS = [
	{
		date: 'NOVEMBER 10, 2023',
		quote: 'Amazing units for my two children, quality is perfect, fits in my room perfectly',
		name: 'Ashok Kumud',
		image: 'testimonial_1',
	},
	{
		date: 'OCTOBER 30, 2023',
		quote: 'Highly recommended conference table for your office',
		name: 'Pramod Kumar',
		image: 'testimonial_2',
	},
	{
		date: 'JULY 16, 2023',
		quote: 'Furnicap delivers the best product for everyday use',
		name: 'Jeewan Ghosh',
		image: 'testimonial_3',
	},
];

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
