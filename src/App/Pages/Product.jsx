import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Components/Footer';
import Header from '../Components/Header/Header';
import ImageGallery from '../Components/ImageGallery/ImageGallery';

function Product() {
	return (
		<>
			<Header theme="light" />
			<Container>
				<Row>
					<Col xs={12} md={7}>
						<ImageGallery />
					</Col>
					<Col xs={12} md={5}>
						<div className="d-flex">
							<div className="h3 w-100">Staff lockers</div>
							<div className="h6 flex-shrink-1">Price 1000</div>
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
												<div>Brand</div>
											</Col>
											<Col>
												<div className="h6">
													Assembly
												</div>
												<div>Assembly</div>
											</Col>
										</Row>
									</Container>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header as="div">
									<div className="h5">Specifications</div>
								</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2">
								<Accordion.Header as="div">
									<div className="h5">Seller</div>
								</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</Accordion.Body>
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
