import { Container, Image } from 'react-bootstrap';
import styles from './HeroBottom.module.scss';
import furnicap_frontdrop_cropped from '../../../Assets/furnicap_frontdrop_cropped.png';

function HomeHeroTop() {
	return (
		<Container fluid className={`${styles.hero} position-relative`}>
			<Container className="bg-dark opacity-75 h-85 w-85 position-absolute top-50 start-50 translate-middle border border-2 border-light rounded-5 text-light">
				<div className="h3 p-2 w-100 w-sm-80 w-md-75">
					Craft your ideal furniture Masterpieces today
				</div>
			</Container>
			<Image
				src={furnicap_frontdrop_cropped}
				className="z-1 position-absolute bottom-5 end-0 h-50 w-75"
			/>
		</Container>
	);
}

export default HomeHeroTop;
