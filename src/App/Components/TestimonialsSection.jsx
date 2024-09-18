import { Col, Container, Row } from 'react-bootstrap';
import furnicap_backdrop from '../../Assets/furnicap_backdrop.png';
import TestimonialCard from './TestimonialCard';

function TestimonialsSection() {
	return (
		<section id="testimonials">
			<Container className="mt-5">
				<div className="h6 text-uppercase">Testimonials</div>
				<div className="h1 text-uppercase">
					What people say about us
				</div>
				<Container className="mt-4 p-0">
					<Row xs="2" md="3">
						<Col>
							<TestimonialCard image={furnicap_backdrop} />
						</Col>
						<Col>
							<TestimonialCard image={furnicap_backdrop} />
						</Col>
						<Col className="d-none d-md-block">
							<TestimonialCard image={furnicap_backdrop} />
						</Col>
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default TestimonialsSection;
