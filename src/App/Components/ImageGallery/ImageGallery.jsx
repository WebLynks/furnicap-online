import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const ImageGallery = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	const images = [
		{ src: 'https://place-hold.it/300x600', alt: 'First Image' },
		{ src: 'https://place-hold.it/808x632', alt: 'Second Image' },
		{ src: 'https://place-hold.it/1000x1000', alt: 'Third Image' },
	];

	return (
		<Container>
			<Row className="gx-0">
				<Col xs={3} className="">
					<div className="d-flex flex-column justify-content-start vh-50 gap-2">
						<Image
							fluid
							src={images[0].src}
							className={`h-30 w-100 ${
								index === 0
									? 'border-dark border border-1 rounded-1'
									: ''
							}`}
							onClick={() => handleSelect(0)}
						></Image>
						<Image
							fluid
							src={images[1].src}
							className={`h-30 w-100 ${
								index === 1
									? 'border-dark border border-1 rounded-1'
									: ''
							}`}
							onClick={() => handleSelect(1)}
						></Image>
						<Image
							fluid
							src={images[2].src}
							className={`h-30 w-100 ${
								index === 2
									? 'border-dark border border-1 rounded-1'
									: ''
							}`}
							onClick={() => handleSelect(2)}
						></Image>
					</div>
				</Col>
				<Col xs={9} className="">
					<Container className="vh-50">
						<Image
							fluid
							src={images[index].src}
							className="w-100 h-95"
						></Image>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default ImageGallery;
