import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import useImage from '../../useImage';

const ImageGallery = ({ images }) => {
	const [index, setIndex] = useState(0);
	const { loading, error, image } = useImage(images[0], 'png');

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page
	}, []);

	if (error) return `${images[0].image} image`;

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Container>
			<Row className="gx-0">
				<Col xs={3} className="">
					<div className="d-flex flex-column justify-content-start vh-50 gap-2">
						{loading
							? `${images[0].image} image`
							: images.map((img, idx) => (
									<Image
										key={idx}
										fluid
										src={image}
										className={`h-30 w-100 ${
											index === 0
												? 'border-dark border border-1 rounded-1'
												: ''
										}`}
										onClick={() => handleSelect(0)}
									></Image>
							  ))}
					</div>
				</Col>
				<Col xs={9} className="">
					<Container className="vh-50">
						<Image fluid src={image} className="w-100 h-95"></Image>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default ImageGallery;
