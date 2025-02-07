import { Col, Container, Row } from 'react-bootstrap';

function AboutSection() {
	return (
		<section id="about">
			<Container className="mt-5 mb-5 ps-4 ps-md-0 pe-4 pe-md-0">
				<Row>
					<Col md="4">
						<div className="fs-3r fs-xxl-4r fw-bold lh-1">
							ABOUT US
						</div>
					</Col>
					<Col md="8" className="mt-3 mt-md-0 fs-6 fs-md-5">
						<p>
							Singhania Enterprises operates under the brand name
							Furnicap offers innovative, ergonomic and affordable
							furniture solutions while striving to be market
							leaders. With 20 years of experience we specialize
							in premium-quality furniture certified by ISO, NSIC
							and MSME. Our products suit commercial, hospitality
							and residential spaces exceeding client expectations
							through ergonomic research, advanced manufacturing
							and effective marketing. We collaborate with
							professionals to ensure successful design execution
							and offer customized services for individual needs.
							Whether for small or bulk orders we enhance spaces
							with aesthetically pleasing designs.
						</p>
					</Col>
					<Col md="4" className="mt-5">
						<Container className="text-md-center">
							<Row>
								<Col xs="3" md="12">
									<div className="fs-3r fs-xxl-4r fw-bold lh-1">
										10+
									</div>
								</Col>
								<Col xs="9" md="12">
									<p className="fs-6 fs-md-5">
										Over 10 years of expertise delivering
										quality and innovation.
									</p>
								</Col>
							</Row>
						</Container>
					</Col>
					<Col md="4" className="mt-5">
						<Container className="text-md-center">
							<Row>
								<Col xs="3" md="12">
									<div className="fs-3r fs-xxl-4r fw-bold lh-1">
										200+
									</div>
								</Col>
								<Col xs="9" md="12">
									<p className="fs-6 fs-md-5">
										Proudly serving over 200 clients with
										dedication and excellence.
									</p>
								</Col>
							</Row>
						</Container>
					</Col>
					<Col md="4" className="mt-5">
						<Container className="text-md-center">
							<Row>
								<Col xs="3" md="12">
									<div className="fs-3r fs-xxl-4r fw-bold lh-1">
										12k+
									</div>
								</Col>
								<Col xs="9" md="12">
									<p className="fs-6 fs-md-5">
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

export default AboutSection;
