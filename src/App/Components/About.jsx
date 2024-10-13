import { Col, Container, Row } from 'react-bootstrap';

function About() {
	return (
		<section id="about">
			<Container className="mt-5">
				<Row>
					<Col md="4">
						<h1>ABOUT US</h1>
					</Col>
					<Col md="8" className="mt-3 mt-md-0">
						<p>
							Singhania Enterprises, operating under the brand
							name Furnicap, offers innovative, ergonomic, and
							affordable furniture solutions, striving to be
							market leaders. With 20 years of experience, we
							specialize in premiumquality furniture certified by
							ISO, NSIC, and MSME. Our products suit commercial,
							hospitality, and residential spaces, exceeding
							client expectations through extensive ergonomic
							research, advanced manufacturing, and effective
							marketing. We collaborate with professionals to
							ensure successful design execution, offering
							customized services for individual needs. Whether
							for small or bulk orders, we enhance spaces with
							aesthetically pleasing designs.
						</p>
					</Col>
					<Col md="4" className="mt-3">
						<Container className="text-md-center">
							<Row>
								<Col xs="3" md="12">
									<h1>10+</h1>
								</Col>
								<Col xs="9" md="12">
									<p>
										Over 10 years of expertise delivering
										quality and innovation.
									</p>
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
									<p>
										Proudly serving over 200 clients with
										dedication and excellence.
									</p>
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
									<p>
										Successfully completed over 12,000
										deliveries with precision and care.
									</p>
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
