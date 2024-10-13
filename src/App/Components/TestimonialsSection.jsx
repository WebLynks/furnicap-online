import { Container, Row } from 'react-bootstrap';
import TestimonialCard from './TestimonialCard';
import { getTestimonials } from '../../Data/data';

function TestimonialsSection() {
	const testimonials = getTestimonials();

	return (
		<section id="testimonials">
			<Container className="mt-5">
				<div className="h6 text-uppercase">Testimonials</div>
				<div className="h1 text-uppercase">
					What people say about us
				</div>
				<Container className="mt-4 p-0">
					<Row xs="2" md="3">
						{testimonials.map((testimonial) => (
							<TestimonialCard
								key={testimonial.name}
								testimonial={testimonial}
							/>
						))}
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default TestimonialsSection;
