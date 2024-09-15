import {
	Card,
	CardText,
	CardTitle,
	Col,
	Container,
	Row,
	Image,
} from 'react-bootstrap';
import styles from './HomeHeroTop.module.scss';
import Header from '../Header/Header';
import furnicap_facebook_rounded from '../../../Assets/furnicap_facebook_rounded.png';
import furnicap_linkedin_rounded from '../../../Assets/furnicap_linkedin_rounded.png';
import furnicap_instagram_rounded from '../../../Assets/furnicap_instagram_rounded.png';

function HomeHeroTop() {
	return (
		<Card className={`${styles.hero} border-0`}>
			<Header />
			<Container className="text-light mt-4">
				<Row>
					<Col xs="9" md="6">
						<div className="h1">
							Discover comfort, style and quality craftmanship
						</div>
						<CardText className="mt-1">
							Our furniture embodies a perfect blend of
							functionality and aesthetic appeal ensuring that
							every piece enhances your home.
						</CardText>
					</Col>
					<Col xs="3" md="6">
						<Container className="d-flex flex-column text-end">
							<Container>
								<Image
									style={{ width: '2rem' }}
									className="p-1"
									src={furnicap_facebook_rounded}
								/>
							</Container>
							<Container>
								<Image
									style={{ width: '2rem' }}
									className="p-1"
									src={furnicap_linkedin_rounded}
								/>
							</Container>
							<Container>
								<Image
									style={{ width: '2rem' }}
									className="p-1"
									src={furnicap_instagram_rounded}
								/>
							</Container>
						</Container>
					</Col>
				</Row>
			</Container>
		</Card>
	);
}

export default HomeHeroTop;
