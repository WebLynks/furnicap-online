import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

function ProductsSection() {
	return (
		<section id="products">
			<Container className="mt-5">
				<div className="h6 text-uppercase">Products</div>
				<div className="h1 text-uppercase">Browse our selection</div>
				<Container className="mt-4">
					<Row xs="2" className="g-0 g-sm-2 g-md-3 g-lg-4">
						<Col>
							<ProductCard />
						</Col>
						<Col>
							<ProductCard />
						</Col>
						<Col>
							<ProductCard />
						</Col>
						<Col>
							<ProductCard />
						</Col>
						<Col>
							<ProductCard />
						</Col>
						<Col>
							<ProductCard />
						</Col>
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default ProductsSection;
