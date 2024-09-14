import { Col, Container, Row } from 'react-bootstrap';

function About() {
	return (
		<section id="about">
			<Container className="mt-5">
				<Row>
					<Col md="3">
						<h1>ABOUT US</h1>
					</Col>
					<Col md="9" className="mt-3 mt-md-0">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Suscipit obcaecati id a dolores. Quaerat porro
							eveniet quo veniam, temporibus ipsa error facere
							molestiae aliquid enim, laborum eum. Officiis harum
							omnis tempora ipsam deleniti veniam adipisci?
							Aspernatur, laudantium laboriosam, cumque error
							animi, iure consequatur ea veritatis vero quasi
							voluptatem? Suscipit, odit cum voluptatum numquam
							nam asperiores sunt eveniet eligendi qui delectus,
							veritatis perferendis recusandae nisi eius deleniti
							veniam animi cupiditate nulla!
						</p>
					</Col>
					<Col md="4" className="mt-3">
						<Container className="text-md-center">
							<Row>
								<Col xs="3" md="12">
									<h1>10+</h1>
								</Col>
								<Col xs="9" md="12">
									<h5>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Dolores, provident.
									</h5>
								</Col>
							</Row>
						</Container>
					</Col>
					<Col md="4" className="mt-3">
						<Container className="text-md-center">
							<Row>
								<Col xs="3" md="12">
									<h1>200+</h1>
								</Col>
								<Col xs="9" md="12">
									<h5>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Dolores, provident.
									</h5>
								</Col>
							</Row>
						</Container>
					</Col>
					<Col md="4" className="mt-3">
						<Container className="text-md-center">
							<Row>
								<Col xs="3" md="12">
									<h1>1200+</h1>
								</Col>
								<Col xs="9" md="12">
									<h5>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Dolores, provident.
									</h5>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default About;
