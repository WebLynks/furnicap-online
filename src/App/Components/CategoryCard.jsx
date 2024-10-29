import { Button, Card, CardImgOverlay, Col, Image } from 'react-bootstrap';
import useImage from '../useImage';

function ProductCard({ name, image }) {
	const { loading, error, image: img } = useImage(image);

	if (error) return `${name} image`;

	return (
		<Col>
			<Card className="position-relative border-0 h-100">
				{loading ? (
					`${name} image`
				) : (
					<Image
						alt={`${name} image`}
						className="border-0 rounded-3 min-vh-30 h-100"
						src={img}
					/>
				)}
				<CardImgOverlay className="m-3">
					<Button className="position-absolute start-auto end-0 start-md-0 end-md-auto border-dark border-2 bottom-0 rounded-pill bg-light text-dark fs-6 fs-md-5 px-4">
						{name}
					</Button>
				</CardImgOverlay>
			</Card>
		</Col>
	);
}

export default ProductCard;
