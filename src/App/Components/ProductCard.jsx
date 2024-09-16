import { Card, CardSubtitle, CardTitle, Image } from 'react-bootstrap';
import furnicap_frontdrop from '../../Assets/furnicap_frontdrop.png';

function ProductCard({
	name = 'Luxury Leather Sofa',
	category = 'Sofa',
	price = '16000',
}) {
	return (
		<Card
			text="dark"
			className="bg-dark-subtle p-3 border-dark-subtle border-sm-0 rounded-0 rounded-sm-2"
		>
			<CardTitle>{name}</CardTitle>
			<Image fluid className="p-2" src={furnicap_frontdrop} />
			<div className="d-flex justify-content-between">
				<CardSubtitle>{category}</CardSubtitle>
				<CardSubtitle>{`₹${price}`}</CardSubtitle>
			</div>
		</Card>
	);
}

export default ProductCard;
