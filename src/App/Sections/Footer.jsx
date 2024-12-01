import { Col, Container, Image, NavLink, Row } from 'react-bootstrap';
import furnicap_logo from '../../Assets/furnicao_logo.png';
import furnicap_facebook_rounded from '../../Assets/furnicap_facebook_rounded.png';
import furnicap_linkedin_rounded from '../../Assets/furnicap_linkedin_rounded.png';
import furnicap_instagram_rounded from '../../Assets/furnicap_instagram_rounded.png';
import furnicap_twitter from '../../Assets/furnicap_twitter.png';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer>
			<Container fluid className="bg-dark text-light">
				<Container className="pt-5 pb-5">
					<Row className="gx-2 gy-5">
						<Col xs="12" md="3" lg="4">
							<div className="w-8r bg-light text-center border-0 rounded-pill px-3 py-1">
								<Image fluid src={furnicap_logo} />
							</div>
							<p className="mt-4 pe-2 fs-6">
								Furnicap is an innovative e-commerce platform
								specializing in high-quality furniture and home
								decor.
							</p>
							<Container className="d-flex flex-row p-0 gap-1 mt-4">
								<a
									href="https://www.facebook.com/furnicap"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										fluid
										className="p-1 w-2r"
										src={furnicap_facebook_rounded}
									/>
								</a>
								<a
									href="https://www.linkedin.com/company/furnicap/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										fluid
										className="p-1 w-2r"
										src={furnicap_linkedin_rounded}
									/>
								</a>
								<a
									href="https://www.instagram.com/furnicap.india/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										fluid
										className="p-1 w-2r"
										src={furnicap_instagram_rounded}
									/>
								</a>
								<a
									href="https://x.com/furnicapinn"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										fluid
										className="p-1 w-2r rounded-circle"
										src={furnicap_twitter}
									/>
								</a>
							</Container>
						</Col>
						<Col xs="12" md="2">
							<div className="h4">Quick links</div>
							<NavLink as={Link} to="/">
								<div className="mt-4">Home</div>
							</NavLink>
							<NavLink as={Link} to="/products">
								<div className="mt-3">Products</div>
							</NavLink>
							<NavLink as={Link} to="/company-profile">
								<div className="mt-3">Company profile</div>
							</NavLink>
							<NavLink as={Link} to="/contact">
								<div className="mt-3">Contact</div>
							</NavLink>
						</Col>
						<Col xs="12" md="3" lg="3">
							<div className="h4">Important links</div>
							<div className="mt-4">Contact us</div>
							<div className="mt-3">Return policy</div>
							<div className="mt-3">Privacy policy</div>
							<div className="mt-3">Terms and conditions</div>
						</Col>
						<Col xs="12" md="4" lg="3">
							<div className="h4">Get in touch</div>
							<div className="mt-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-envelope"
									viewBox="0 0 16 16"
								>
									<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
								</svg>
								<span className="ms-3 fs-6 fs-md-p9r">
									furnicapinnovatives@gmail.com
								</span>
							</div>
							<div className="mt-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-person-square"
									viewBox="0 0 16 16"
								>
									<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
									<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
								</svg>
								<span className="ms-3">+919830441013</span>
							</div>
							<div className="mt-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-clock"
									viewBox="0 0 16 16"
								>
									<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
									<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
								</svg>
								<span className="ms-3 fs-md-p9r fs-6">
									Monday-Friday, 8am-8pm
								</span>
							</div>
						</Col>
					</Row>
				</Container>
			</Container>
			<Container>
				<Row xs={1} md={2} className="justify-content-end gy-2">
					<Col className="text-center text-md-start fs-p9r">
						© 2024 Furnicap. All rights reserved.
					</Col>
					<Col className="text-center text-md-end fs-p9r">
						Designed and Developed by{' '}
						<i className="fw-bold">WebLynks</i>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
