import { Container, Row } from 'react-bootstrap';
import CategoryCard from '../Components/CategoryCard';
import { getCatalogues } from '../../Data/dataAPIs';

function ProductsSection() {
	const catalogues = getCatalogues();

	return (
		<section id="catalogue">
			<Container className="mt-5 mb-5">
				<div className="fs-6 fs-md-5 text-uppercase">Catalogue</div>
				<div className="fs-3r fs-xxl-4r fw-bold lh-1 text-uppercase mb-5">
					Choose from our range
				</div>
				<Container className="mt-5">
					<Row xs="1" md="3" className="g-4">
						{catalogues.map((category) => (
							<CategoryCard key={category.name} {...category} />
						))}
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default ProductsSection;
