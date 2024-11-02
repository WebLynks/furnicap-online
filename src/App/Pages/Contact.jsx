import { Col, Container, Image, Row } from 'react-bootstrap';
import furnicap_facebook_rounded from '../../Assets/furnicap_facebook_rounded.png';
import furnicap_instagram_rounded from '../../Assets/furnicap_instagram_rounded.png';
import furnicap_linkedin_rounded from '../../Assets/furnicap_linkedin_rounded.png';
import furnicap_twitter from '../../Assets/furnicap_twitter.png';
import Footer from '../Sections/Footer';
import Header from '../Sections/Header/Header';
import ContactHeroMiddle from '../Components/ContactHeroMiddle/ContactHeroMiddle';

function Contact() {
	return (
		<>
			<Header theme="light" />
			<section id="contact">
				<Container className="min-vh-100">
					<Row xs={1} md={2} className="gy-5">
						<Col>
							<Container className="mt-5">
								<Row>
									<Col>
										<div className="fs-2r fs-xxl-3r fw-bold lh-1">
											Contact Information
										</div>
										<div className="mt-3 fs-6 fs-md-5">
											<div className="fs-6">
												Get in touch
											</div>
										</div>
									</Col>
								</Row>
								<Row xs={1} md={2} className="mt-5">
									<Col>
										<div className="fs-2r fs-xxl-3r fw-bold lh-1">
											Phone
										</div>
										<div className="mt-3 fs-6 fs-md-5">
											<div className="fs-6">
												+919830441013
											</div>
										</div>
									</Col>
									<Col className="mt-5 mt-md-0">
										<div className="fs-2r fs-xxl-3r fw-bold lh-1">
											Location
										</div>
										<div className="mt-3 fs-6 fs-md-5">
											<div className="fs-6">
												A1M, Roy Bahadur Rd, Sneha
												Garden, Buroshibtalla, Behala,
												Kolkata, West
												Bengal 700034, India
											</div>
										</div>
									</Col>
								</Row>
								<Row className="mt-5">
									<Col xs="12" md="6">
										<div className="fs-2r fs-xxl-3r fw-bold lh-1">
											Email
										</div>
										<div className="mt-3 fs-p9r fs-md-5">
											<div className="fs-6">
												furnicapinnovatives@gmail.com
											</div>
										</div>
									</Col>
									<Col
										xs="12"
										md="6"
										className="mt-5 mt-md-0"
									>
										<div className="fs-2r fs-xxl-3r fw-bold lh-1">
											Follow Us
										</div>
										<div className="mt-3 mb-md-5 fs-6 fs-md-5">
											<Container className="d-flex flex-row p-0 gap-1">
												<Image
													fluid
													className="p-1 w-2r rounded-circle bg-dark"
													src={
														furnicap_facebook_rounded
													}
												/>
												<Image
													fluid
													className="p-1 w-2r rounded-circle bg-dark"
													src={
														furnicap_linkedin_rounded
													}
												/>
												<Image
													fluid
													className="p-1 w-2r rounded-circle bg-dark"
													src={
														furnicap_instagram_rounded
													}
												/>
												<Image
													fluid
													className="p-1 w-2r rounded-circle bg-dark"
													src={furnicap_twitter}
												/>
											</Container>
										</div>
									</Col>
								</Row>
							</Container>
						</Col>
						<Col>
							<ContactHeroMiddle />
						</Col>
					</Row>
				</Container>
			</section>
			<Footer />
		</>
	);
}

export default Contact;
