import { Card, Col, Image } from 'react-bootstrap';
import useImage from '../useImage';

function TestimonialCard({ testimonial }) {
	const { loading, error, image } = useImage(testimonial.image, 'jpg');

	if (error) return `${testimonial.image} image`;

	return (
		<Col>
			<Card className="border-0">
				{loading ? (
					`${testimonial.image} image`
				) : (
					<Image
						fluid
						src={image}
						className="border-dark border border-2 rounded-2"
						alt={`${testimonial.image} image`}
					/>
				)}
				<p className="mt-4 fs-6 fs-md-5">{testimonial.date}</p>
				<p className="fs-6 fs-md-5">
					<q>{testimonial.quote}</q>
				</p>
				<p className="fs-6 fs-md-5">{`- ${testimonial.name}`}</p>
			</Card>
		</Col>
	);
}

export default TestimonialCard;
