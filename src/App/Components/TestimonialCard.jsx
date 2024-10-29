import { Card, Col, Image } from 'react-bootstrap';
import useImage from '../useImage';

function TestimonialCard({ name, image, testimonials, date, product }) {
	const { loading, error, image: img } = useImage(image);

	if (error) return `${product} image`;

	return (
		<Col>
			<Card className="border-0">
				{loading ? (
					`${product} image`
				) : (
					<Image
						fluid
						src={img}
						className="border-dark border border-2 rounded-2"
						alt={`${product} image`}
					/>
				)}
				<p className="mt-4 fs-6 fs-md-5">{date}</p>
				<p className="fs-6 fs-md-5">
					<q>{testimonials}</q>
				</p>
				<p className="fs-6 fs-md-5">{`- ${name}`}</p>
			</Card>
		</Col>
	);
}

export default TestimonialCard;
