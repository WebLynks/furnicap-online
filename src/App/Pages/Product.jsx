import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Sections/Footer';
import Header from '../Sections/Header/Header';
import ImageGallery from '../Components/ImageGallery/ImageGallery';
import { useParams } from 'react-router-dom';
import { getproduct } from '../../Data/dataAPIs';

function Product() {
	const { productName } = useParams();
	const product = getproduct(productName);
	const images = [product.image_name, product.image_name, product.image_name];

	return (
		<>
			<Header theme="light" />
			<Container className="mt-5 mb-5">
				<Row>
					<Col xs={12} md={7}>
						<ImageGallery images={images} />
					</Col>
					<Col xs={12} md={5}>
						<div className="d-flex flex-column">
							<div className="h3 w-100">
								{product.product_name}
							</div>
							<div className="h6">{`Price ₹${product.price}`}</div>
						</div>

						<hr />

						<Accordion flush defaultActiveKey="0">
							<Accordion.Item eventKey="0">
								<Accordion.Header as="div">
									<div className="h5">Product Details</div>
								</Accordion.Header>
								<Accordion.Body>
									<Container fluid>
										<Row xs="2">
											<Col>
												<div className="h6">Brand</div>
												<div>Furnicap</div>
											</Col>
											<Col>
												<div className="h6">
													Assembly
												</div>
												<div>Assembled</div>
											</Col>
										</Row>
									</Container>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header as="div">
									<div className="h5">Specifications</div>
								</Accordion.Header>
								<Accordion.Body></Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2">
								<Accordion.Header as="div">
									<div className="h5">Seller</div>
								</Accordion.Header>
								<Accordion.Body>Furnicap</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}

export default Product;
