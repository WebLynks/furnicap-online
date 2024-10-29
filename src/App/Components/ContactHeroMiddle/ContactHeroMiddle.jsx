import { Image } from 'react-bootstrap';
import styles from './ContactHeroMiddle.module.scss';
import furnicap_logo from '../../../Assets/furnicao_logo.png';

function ContactHeroMiddle() {
	return (
		<div
			className={`${styles.hero} border-0 mt-5 text-light d-flex align-items-center justify-content-center`}
		>
			<div
				className={`bg-light h-60 w-70 d-flex align-items-center justify-content-center`}
			>
				<div className="w-80 d-flex justify-content-center align-items-center">
					<Image src={furnicap_logo} fluid />
				</div>
			</div>
		</div>
	);
}

export default ContactHeroMiddle;
