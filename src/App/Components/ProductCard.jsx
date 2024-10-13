import { Card, CardSubtitle, CardTitle, Col, Image } from 'react-bootstrap';
import useImage from '../useImage';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
	const { loading, error, image } = useImage(product.image, 'png');

	if (error) return `${product.image} image`;

	return (
		<Col>
			<Link
				to={`/products/${product.name}`}
				style={{ textDecoration: 'none', color: 'inherit' }}
			>
				<Card
					text="dark"
					className="bg-dark-subtle p-3 border-dark-subtle border-sm-0 rounded-0 rounded-sm-2 h-100"
				>
					<CardTitle>{product.name}</CardTitle>
					{loading ? (
						`${product.image} image`
					) : (
						<Image fluid className="p-2 h-100" src={image} />
					)}
					<div className="d-flex justify-content-between">
						<CardSubtitle as="p">{product.category}</CardSubtitle>
						{product.price ? (
							<CardSubtitle as="p">{`₹${product.price}`}</CardSubtitle>
						) : null}
					</div>
				</Card>
			</Link>
		</Col>
	);
}

export default ProductCard;
