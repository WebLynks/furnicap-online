import { Card, Image } from 'react-bootstrap';

function TestimonialCard({
	date = 'NOVEMBER 10, 2023',
	quote = 'Amazing units for my two children, quality is perfect, fits in my room perfectly',
	name = 'Virat Kohli',
	image,
}) {
	return (
		<Card className="border-0">
			<Image
				fluid
				src={image}
				className="border-dark border border-2 rounded-2"
			/>
			<p className="mt-4">{date}</p>
			<p>
				<q>{quote}</q>
			</p>
			<p>{`- ${name}`}</p>
		</Card>
	);
}

export default TestimonialCard;
