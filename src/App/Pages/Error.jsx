import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Sections/Header/Header';
import Footer from '../Sections/Footer';

function Error() {
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
