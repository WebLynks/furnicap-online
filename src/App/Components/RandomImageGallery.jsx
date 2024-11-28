import { Col, Container, Row } from 'react-bootstrap';
import { getFourRandomProductImages } from '../../Data/dataAPIs';
import ImageWrapper from './ImageWrapper';

const RandomImageGallery = () => {
	const images = getFourRandomProductImages();

	return (
		<Container fluid className="mt-4">
			<Row xs={2} className="g-4">
				{images.map((image) => {
					return (
						<Col key={image}>
							<ImageWrapper
								imageName={image}
								className="vh-30 w-100"
							/>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default RandomImageGallery;
