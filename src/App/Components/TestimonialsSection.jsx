import { Container, Row } from 'react-bootstrap';
import TestimonialCard from './TestimonialCard';
import { getTestimonials } from '../../Data/dataAPIs';

function TestimonialsSection() {
	const testimonials = getTestimonials();

	return (
		<section id="testimonials">
			<Container className="mt-5 mb-5">
				<div className="fs-6 fs-md-5 text-uppercase">Testimonials</div>
				<div className="fs-3r fs-xxl-4r fw-bold lh-1 text-uppercase mb-5">
					What people say about us
				</div>
				<Container className="mt-5 p-0">
					<Row xs="2" md="3">
						{testimonials.map((testimonial) => (
							<TestimonialCard
								key={testimonial.name}
								{...testimonial}
							/>
						))}
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default TestimonialsSection;
