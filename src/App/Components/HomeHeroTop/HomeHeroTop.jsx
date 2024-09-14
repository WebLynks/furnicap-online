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
		<Card className={styles.hero}>
			<Header />
			<Container className="mt-3 text-light">
				<Row>
					<Col xs="9">
						<CardTitle as={'h1'}>
							Discover comfort, style and quality craftmanship
						</CardTitle>
						<CardText className="mb-0 mt-4">
							Our furniture embodies a perfect blend of
							functionality and aesthetic appeal ensuring that
							every piece enhances your home.
						</CardText>
					</Col>
					<Col xs="3">
						<div className="d-flex flex-column text-end">
							<div className="p-1">
								<Image
									src={furnicap_facebook_rounded}
									className="w-25"
								/>
							</div>
							<div className="p-1">
								<Image
									src={furnicap_linkedin_rounded}
									className="w-25"
								/>
							</div>
							<div className="p-1">
								<Image
									src={furnicap_instagram_rounded}
									className="w-25"
								/>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</Card>
	);
}

export default HomeHeroTop;
