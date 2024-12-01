import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Sections/Footer';
import Header from '../Sections/Header/Header';
import ImageGallery from '../Components/ImageGallery';
import { useParams } from 'react-router-dom';
import { getproduct } from '../../Data/dataAPIs';
import RandomImageGallery from '../Components/RandomImageGallery';
import { useEffect } from 'react';

function Product() {
	const { productName } = useParams();
	const product = getproduct(productName);
	const images = [product.image_name, product.image_name, product.image_name];

	// scroll to top on page load smoothly
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	return (
		<>
			<Header theme="light" />
			<Container className="mt-5 mb-5">
				<Row>
					<Col xs={12} md={7}>
						<Row>
							<Col xs={12}>
								<ImageGallery images={images} />
							</Col>
						</Row>
						<Row className="d-none d-md-block">
							<Col xs={12}>
								<div className="h5 mt-5">
									Other designs you'll like
								</div>
								<RandomImageGallery />
							</Col>
							<Col xs={12}>
								<div className="h5 mt-5">
									Customers also bought
								</div>
								<RandomImageGallery />
							</Col>
						</Row>
					</Col>
					<Col xs={12} md={5}>
						<div className="d-flex flex-column">
							<div className="h3 w-100">
								{product.product_name}
							</div>
							<div className="h6">{`Price ₹${product.price}`}</div>
						</div>

						<hr />

						<div>
							<div className="h5 mt-5">Product Details</div>
							<Container fluid className="mt-2">
								<Row xs="2">
									<Col className="mt-4">
										<div className="h6">Brand</div>
										<div>{product.brand}</div>
									</Col>
									<Col className="mt-4">
										<div className="h6">Assembly</div>
										<div>{product.assembly}</div>
									</Col>
									<Col className="mt-4">
										<div className="h6">Category</div>
										<div>{product.category}</div>
									</Col>
									<Col className="mt-4">
										<div className="h6">
											Primary Material
										</div>
										<div>{product.primary_material}</div>
									</Col>
								</Row>
							</Container>
							<div className="h5 mt-5">Specifications</div>
							<Container fluid className="mt-2">
								<Row xs="2">
									<Col className="mt-4">
										<div className="h6">Dimensions</div>
										<div>{product.dimensions}</div>
									</Col>
									<Col className="mt-4">
										<div className="h6">Weight</div>
										<div>{product.weight}</div>
									</Col>
								</Row>
							</Container>
							<div className="h5 mt-5">
								Brand and collection overview
							</div>
							<Container fluid className="mt-2">
								<Row xs="1">
									<Col className="mt-4">
										<div>
											{
												product.brand_and_collection_overview
											}
										</div>
									</Col>
								</Row>
							</Container>
							<div className="h5 mt-5">Care and maintenance</div>
							<Container fluid className="mt-2">
								<Row xs="1">
									<Col className="mt-4">
										<div>
											{product.care_and_maintenance}
										</div>
									</Col>
								</Row>
							</Container>
							<div className="h5 mt-5">Seller details</div>
							<Container fluid className="mt-2">
								<Row xs="1">
									<Col className="mt-4">
										<div>{product.seller_details}</div>
									</Col>
								</Row>
							</Container>
							<div className="h5 mt-5">QA</div>
							<Container fluid className="mt-2">
								<Row xs="1">
									<Col className="mt-4">
										<div>{product.QA}</div>
									</Col>
								</Row>
							</Container>
							<div className="mt-5 fst-italic fw-medium">{`* ${product.disclaimers}`}</div>
						</div>

						{/* <Accordion flush defaultActiveKey="0">
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
						</Accordion> */}
					</Col>
				</Row>
				<Row className="d-block d-md-none">
					<Col xs={12}>
						<div className="h5 mt-5">Other designs you'll like</div>
						<RandomImageGallery />
					</Col>
					<Col xs={12}>
						<div className="h5 mt-5">Customers also bought</div>
						<RandomImageGallery />
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}

export default Product;
