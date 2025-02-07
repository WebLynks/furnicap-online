import { Container, Row } from 'react-bootstrap';
import ProductCard from '../Components/ProductCard';
import { getProductWithEachCategory } from '../../Data/dataAPIs';

function ProductsSection() {
	const products = getProductWithEachCategory();

	return (
		<section id="products">
			<Container className="mt-5 mb-5">
				<div className="fs-6 fs-md-5 text-uppercase">Products</div>
				<div className="fs-3r fs-xxl-4r fw-bold lh-1 text-uppercase mb-5">
					Browse our selection
				</div>
				<Container className="mt-5 p-0">
					<Row xs="1" md={3} className="g-1 g-md-2">
						{products.map((product) => (
							<ProductCard
								key={product.product_name}
								{...product}
							/>
						))}
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default ProductsSection;
