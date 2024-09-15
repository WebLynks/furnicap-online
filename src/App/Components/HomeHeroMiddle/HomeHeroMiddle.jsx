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
			className={`${styles.hero} border-0 mt-5 text-light d-flex align-items-center justify-content-center`}
		>
			<Container
				fluid
				className="bg-dark opacity-50 h-75 d-flex align-items-center justify-content-center p-5 overflow-hidden"
			>
				<Row md="6" xs="3" className="flex-grow-1">
					<Col className="d-flex align-items-center justify-content-center flex-column offset-md-1">
						<div className="border border-3 rounded-circle .flex-fill p-3">
							<Image
								src={furnicap_quick_delivery}
								className="w-5r"
							/>
						</div>
						<p className="p-4">Quick delivery</p>
					</Col>
					<Col className="d-flex align-items-center justify-content-center flex-column">
						<div className="border border-3 rounded-circle .flex-fill p-4">
							<Image src={furnicap_easytoshop} className="w-4r" />
						</div>
						<p className="p-4">Easy to shop</p>
					</Col>
					<Col className="d-flex align-items-center justify-content-center flex-column">
						<div className="border border-3 rounded-circle .flex-fill p-4">
							<Image src={furnicap_support} className="w-4r" />
						</div>
						<p className="p-4">24/7 support</p>
					</Col>
					<Col className="d-flex align-items-center justify-content-center flex-column">
						<div className="border border-3 rounded-circle .flex-fill p-4">
							<Image src={furnicap_easyreturn} className="w-4r" />
						</div>
						<p className="p-4">Easy returns</p>
					</Col>
					<Col className="d-flex align-items-center justify-content-center flex-column">
						<div className="border border-3 rounded-circle .flex-fill p-4">
							<Image
								src={furnicap_exceptionalservice}
								className="w-4r"
							/>
						</div>
						<p className="p-4">Excepional Service</p>
					</Col>
				</Row>
			</Container>
		</Card>
	);
}

export default HomeHeroMiddle;
