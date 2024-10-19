import { Container, Image } from 'react-bootstrap';
import styles from './HeroBottom.module.scss';
import furnicap_frontdrop_cropped from '../../../Assets/furnicap_frontdrop_cropped.png';

function HomeHeroTop() {
	return (
		<Container fluid className={`${styles.hero} position-relative mt-5`}>
			<Container className="bg-dark opacity-75 h-75 w-90 position-absolute top-50 start-50 translate-middle border border-2 border-light rounded-5 text-light">
				<div className="fs-3r fs-xxl-4r fw-bold lh-1 p-3 w-100 w-sm-70 w-md-80 mt-4 ms-4">
					Craft your ideal furniture Masterpieces today
				</div>
				<p className="d-none d-md-block fs-6 fs-md-5 p-3 w-100 w-sm-70 w-md-60 ms-4">
					Our furniture embodies a perfect blend of functionality and
					aesthetic appeal ensuring that every piece enhances your
					home.
				</p>
			</Container>
			<Image
				fluid
				src={furnicap_frontdrop_cropped}
				className="z-1 position-absolute bottom-5 bottom-md-0 end-0 h-35 h-sm-45 h-md-50 h-lg-50 h-xl-55 w-90 w-sm-80 w-md-80 w-lg-75 w-xl-70"
			/>
		</Container>
	);
}

export default HomeHeroTop;
