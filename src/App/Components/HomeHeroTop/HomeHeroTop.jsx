import { Card, CardText, Col, Container, Row, Image } from 'react-bootstrap';
import styles from './HomeHeroTop.module.scss';
import Header from '../../Sections/Header/Header';
import furnicap_facebook_rounded from '../../../Assets/furnicap_facebook_rounded.png';
import furnicap_linkedin_rounded from '../../../Assets/furnicap_linkedin_rounded.png';
import furnicap_instagram_rounded from '../../../Assets/furnicap_instagram_rounded.png';

function HomeHeroTop() {
	return (
		<Card className={`${styles.hero} border-0 mb-5`}>
			<Header theme="light" />
			<Container className="text-dark mt-4 mt-md-3">
				<Row>
					<Col xs="12" md="9">
						<div className="fs-3r fs-xxl-4r fw-bold lh-1">
							Discover comfort, style and quality craftmanship
						</div>
						<CardText className="mt-4 mt-md-1 fs-6 fs-md-5">
							Our furniture embodies a perfect blend of
							functionality and aesthetic appeal ensuring that
							every piece enhances your home.
						</CardText>
					</Col>
					<Col
						className="d-none d-md-block"
						md={{ span: 1, offset: 2 }}
					>
						<Container className="d-flex flex-column">
							<Container>
								<a
									href="https://www.facebook.com/furnicap"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										className="p-1 w-2r"
										src={furnicap_facebook_rounded}
									/>
								</a>
							</Container>
							<Container>
								<a
									href="https://www.linkedin.com/company/furnicap/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										className="p-1 w-2r"
										src={furnicap_linkedin_rounded}
									/>
								</a>
							</Container>
							<Container>
								<a
									href="https://www.instagram.com/furnicap.india/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										className="p-1 w-2r"
										src={furnicap_instagram_rounded}
									/>
								</a>
							</Container>
						</Container>
					</Col>
				</Row>
			</Container>
		</Card>
	);
}

export default HomeHeroTop;
