import { Container, Row } from 'react-bootstrap';
import CategoryCard from './CategoryCard';
import { getCategories } from '../../Data/data';

function ProductsSection() {
	const categories = getCategories();

	return (
		<section id="category">
			<Container className="mt-5">
				<div className="h6 text-uppercase">Category</div>
				<div className="h1 text-uppercase">Choose from our range</div>
				<Container className="mt-4">
					<Row xs="1" md="2" className="g-2">
						{categories.map((category) => (
							<CategoryCard
								key={category.name}
								category={category}
							/>
						))}
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default ProductsSection;
