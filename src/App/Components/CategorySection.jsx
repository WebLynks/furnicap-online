import { Col, Container, Row } from 'react-bootstrap';
import CategoryCard from './CategoryCard';

function ProductsSection() {
	return (
		<section id="category">
			<Container className="mt-5">
				<div className="h6 text-uppercase">Category</div>
				<div className="h1 text-uppercase">Choose from our range</div>
				<Container className="mt-4">
					<Row xs="1" md="2" className="g-2">
						<Col>
							<CategoryCard />
						</Col>
						<Col>
							<CategoryCard />
						</Col>
						<Col>
							<CategoryCard />
						</Col>
						<Col>
							<CategoryCard />
						</Col>
						<Col>
							<CategoryCard />
						</Col>
						<Col>
							<CategoryCard />
						</Col>
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default ProductsSection;
