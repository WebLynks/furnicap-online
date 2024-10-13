import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { getProducts } from '../../Data/data';

function ProductsSection() {
	const products = getProducts();

	return (
		<section id="products">
			<Container className="mt-5">
				<div className="h6 text-uppercase">Products</div>
				<div className="h1 text-uppercase">Browse our selection</div>
				<Container className="mt-4 p-0">
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
