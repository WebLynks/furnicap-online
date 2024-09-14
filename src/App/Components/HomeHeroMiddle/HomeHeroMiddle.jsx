import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import styles from './HomeHeroMiddle.module.scss';
import furnicap_quick_delivery from '../../../Assets/furnicap_quick_delivery.png';
import furnicap_easytoshop from '../../../Assets/furnicap_easytoshop.png';
import furnicap_support from '../../../Assets/furnicap_support.png';
import furnicap_easyreturn from '../../../Assets/furnicap_easyreturn.png';
import furnicap_exceptionalservice from '../../../Assets/furnicap_exceptionalservice.png';

function HomeHeroMiddle() {
	return (
		<Card
			className={`${styles.hero} border-0 mt-5 position-relative text-light`}
		>
			<Container
				fluid
				className="bg-dark opacity-50 position-absolute top-50 start-50 translate-middle h-75"
			>
				<Row
					md="5"
					xs="3"
					className="h-100 p-3 d-flex align-items-center justify-content-center"
				>
					<Col className="text-center d-flex flex-column align-items-center justify-content-center">
						<div className="border border-4 rounded-circle w-75 p-3">
							<Image
								src={furnicap_quick_delivery}
								className="w-75"
							/>
						</div>
						<h3 className="p-4">Quick delivery</h3>
					</Col>
					<Col className="text-center d-flex flex-column align-items-center justify-content-center">
						<div className="border border-4 rounded-circle w-75 p-4">
							<Image src={furnicap_easytoshop} className="w-75" />
						</div>
						<h3 className="p-4">Easy to shop</h3>
					</Col>
					<Col className="text-center d-flex flex-column align-items-center justify-content-center">
						<div className="border border-4 rounded-circle w-75 p-4">
							<Image src={furnicap_support} className="w-75" />
						</div>
						<h3 className="p-4">24/7 support</h3>
					</Col>
					<Col className="text-center d-flex flex-column align-items-center justify-content-center">
						<div className="border border-4 rounded-circle w-75 p-4">
							<Image src={furnicap_easyreturn} className="w-75" />
						</div>
						<h3 className="p-4">Easy returns</h3>
					</Col>
					<Col className="text-center d-flex flex-column align-items-center justify-content-center">
						<div className="border border-4 rounded-circle w-75 p-4">
							<Image
								src={furnicap_exceptionalservice}
								className="w-75"
							/>
						</div>
						<h3 className="p-4">Excepional Service</h3>
					</Col>
				</Row>
			</Container>
		</Card>
	);
}

export default HomeHeroMiddle;
