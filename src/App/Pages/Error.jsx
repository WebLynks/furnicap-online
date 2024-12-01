import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Sections/Header/Header';
import Footer from '../Sections/Footer';
import { useEffect } from 'react';

function Error() {
	// scroll to top on page load smoothly
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	return (
		<>
			<Header />
			<section id="error">
				<Container>
					<Row>
						<Col>
							<h1>404</h1>
							<p>Page Not Found</p>
						</Col>
					</Row>
				</Container>
			</section>
			<Footer />
		</>
	);
}

export default Error;
