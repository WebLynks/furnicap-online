import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { getProducts } from '../../Data/data';

function ProductsSection() {
	const products = getProducts();

	return (
		<section id="products">
			<Container className="mt-5 mb-5">
				<div className="fs-6 fs-md-5 text-uppercase">Products</div>
				<div className="fs-3r fs-xxl-4r fw-bold lh-1 text-uppercase mb-5">
					Browse our selection
				</div>
				<Container className="mt-5 p-0">
					<Row xs="2" className="g-0 g-sm-2 g-md-3 g-lg-4">
						{products.map((product) => (
							<ProductCard key={product.name} product={product} />
						))}
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default ProductsSection;
