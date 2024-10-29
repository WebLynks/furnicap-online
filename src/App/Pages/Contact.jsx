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
				<Container>
					<Row xs={1} md={2} className="gy-5">
						<Col>
							<Container className="mt-5">
								<Row>
									<Col>
										<div className="fs-2r fs-xxl-3r fw-bold lh-1">
											Contact Information
										</div>
										<div className="mt-3 fs-6 fs-md-5">
											<div>Get in touch</div>
										</div>
									</Col>
								</Row>
								<Row className="mt-5">
									<Col>
										<div className="fs-2r fs-xxl-3r fw-bold lh-1">
											Phone
										</div>
										<div className="mt-3 fs-6 fs-md-5">
											<div>9899654321</div>
										</div>
									</Col>
									<Col>
										<div className="fs-2r fs-xxl-3r fw-bold lh-1">
											Location
										</div>
										<div className="mt-3 fs-6 fs-md-5">
											<div>
												FF Main Street, 22nd Avenue
											</div>
										</div>
									</Col>
								</Row>
								<Row className="mt-5">
									<Col xs="6">
										<div className="fs-2r fs-xxl-3r fw-bold lh-1">
											Email
										</div>
										<div className="mt-3 fs-p9r fs-md-5">
											<div>furnicap@gmail.com</div>
										</div>
									</Col>
									<Col xs="6">
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
