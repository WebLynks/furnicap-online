import { Col, Container, Image, Row } from 'react-bootstrap';
import furnicap_logo from '../../Assets/furnicao_logo.png';

function Footer() {
	return (
		<>
			<Container fluid className="bg-dark text-light">
				<Container className="pt-5 pb-5">
					<Row md="4" className="g-5">
						<Col>
							<div className="w-25 bg-light text-center border-0 rounded-pill">
								<Image src={furnicap_logo} className="w-75" />
							</div>
							<p className="mt-3 pe-3">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Placeat veniam reprehenderit
								quaerat laudantium rerum officiis?
							</p>
						</Col>
						<Col>
							<h4>Quick Links</h4>
							<p>About us</p>
							<p>Our shop</p>
							<p>Who we are</p>
							<p>What we offer</p>
							<p>Reviews</p>
							<p>FAQ</p>
						</Col>
						<Col>
							<h4>Important Links</h4>
							<p>Contact us</p>
							<p>Return policy</p>
							<p>Privacy policy</p>
							<p>Terms and conditions</p>
						</Col>
						<Col>
							<h4>Social Network</h4>
						</Col>
					</Row>
				</Container>
			</Container>
			<Container>
				<div className="d-flex flex-row">
					<div className="p-2 me-auto">
						Copyright by Furnicap - All rights reserved
					</div>
					<div className="p-2 ms-auto">
						Privacy policy | Cookie policy
					</div>
				</div>
			</Container>
		</>
	);
}

export default Footer;
