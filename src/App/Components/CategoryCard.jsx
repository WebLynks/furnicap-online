import { Button, Card, CardImgOverlay, Image } from 'react-bootstrap';
import furnicap_herosection from '../../Assets/furnicap_herosection.png';

function ProductCard({ name = 'Computer table' }) {
	return (
		<Card className="position-relative border-0">
			<Image
				className="border-0 rounded-3 min-vh-30"
				src={furnicap_herosection}
			/>
			<CardImgOverlay className="m-3">
				<Button className="position-absolute start-auto end-0 start-md-0 end-md-auto border-dark border-2 bottom-0 rounded-pill bg-light text-dark">
					{name}
				</Button>
			</CardImgOverlay>
		</Card>
	);
}

export default ProductCard;
