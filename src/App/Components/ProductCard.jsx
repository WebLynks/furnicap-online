import { Card, CardSubtitle, CardTitle, Col, Image } from 'react-bootstrap';
import useImage from '../useImage';
import { Link } from 'react-router-dom';

function ProductCard({
	image_name,
	product_name,
	category,
	price,
	isFontSmall,
}) {
	const { loading, error, image: img } = useImage(image_name);
	const productName = product_name.split(' ').join('-');

	if (error) return `${product_name} image`;

	return (
		<Col>
			<Link
				to={`/products/${productName}`}
				style={{ textDecoration: 'none', color: 'inherit' }}
			>
				<Card
					text="dark"
					className="p-3 border-dark-subtle border-sm-0 rounded-0 rounded-sm-2 h-100"
				>
					<CardTitle
						className={`fs-6 ${
							isFontSmall ? 'fs-lg-6' : 'fs-lg-5'
						} fw-bold`}
					>
						{product_name}
					</CardTitle>
					{loading ? (
						`${product_name} image`
					) : (
						<Image
							alt={`${product_name} image`}
							fluid
							className="my-1 h-100"
							src={img}
							rounded
						/>
					)}
					<div className="d-flex flex-column flex-md-row justify-content-between">
						<CardSubtitle
							as="p"
							className={`fs-6 ${
								isFontSmall ? 'fs-lg-6' : 'fs-lg-5'
							} mt-2`}
						>
							{category}
						</CardSubtitle>
						{price ? (
							<CardSubtitle
								as="p"
								className={`fs-6 ${
									isFontSmall ? 'fs-lg-6' : 'fs-lg-5'
								} mt-2`}
							>{`₹${price}`}</CardSubtitle>
						) : null}
					</div>
				</Card>
			</Link>
		</Col>
	);
}

export default ProductCard;
