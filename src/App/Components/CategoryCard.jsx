import { Button, Card, CardImgOverlay, Col, Image } from 'react-bootstrap';
import useImage from '../useImage';

function ProductCard({ category }) {
	const { loading, error, image } = useImage(category.image, 'jpg');

	if (error) return `${category.image} image`;

	return (
		<Col>
			<Card className="position-relative border-0 h-100">
				{loading ? (
					`${category.image} image`
				) : (
					<Image
						className="border-0 rounded-3 min-vh-30 h-100"
						src={image}
					/>
				)}
				<CardImgOverlay className="m-3">
					<Button className="position-absolute start-auto end-0 start-md-0 end-md-auto border-dark border-2 bottom-0 rounded-pill bg-light text-dark">
						{category.name}
					</Button>
				</CardImgOverlay>
			</Card>
		</Col>
	);
}

export default ProductCard;
