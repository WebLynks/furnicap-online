import { Container, Row } from 'react-bootstrap';
import { getProducts } from '../../Data/dataAPIs';
import ProductCard from '../Components/ProductCard';
import Header from '../Sections/Header/Header';
import Footer from '../Sections/Footer';

function Products() {
	const products = getProducts();

	return (
		<>
			<Header theme="light" />
			<section id="products">
				<Container className="mt-5 mb-5">
					<div className="fs-3r fs-xxl-4r fw-bold lh-1 text-uppercase mb-5">
						Our range of products
					</div>
					<Container fluid className="mt-5 p-0">
						<Row xs={2} md={3} className="g-1 g-md-2">
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
			<Footer />
		</>
	);
}

export default Products;
