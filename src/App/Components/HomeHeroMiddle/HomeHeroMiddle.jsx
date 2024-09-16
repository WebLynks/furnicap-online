import { Image } from 'react-bootstrap';
import styles from './HomeHeroMiddle.module.scss';
import furnicap_quick_delivery from '../../../Assets/furnicap_quick_delivery.png';
import furnicap_easytoshop from '../../../Assets/furnicap_easytoshop.png';
import furnicap_support from '../../../Assets/furnicap_support.png';
import furnicap_easyreturn from '../../../Assets/furnicap_easyreturn.png';
import furnicap_exceptionalservice from '../../../Assets/furnicap_exceptionalservice.png';

function HomeHeroMiddle() {
	return (
		<div
			className={`${styles.hero} border-0 mt-5 text-light d-flex align-items-center justify-content-center`}
		>
			<div
				className={`bg-dark opacity-50 h-75 w-xs-90 w-sm-75 gap-3
				 w-md-100 p-0 d-flex align-items-center justify-content-center 
				 flex-md-row flex-column`}
			>
				<div className="d-flex justify-content-center align-items-center gap-3">
					<div className="d-flex justify-content-center align-items-center flex-column text-center">
						<div className="border border-3 rounded-circle p-3">
							<Image
								src={furnicap_quick_delivery}
								className="w-3r"
							/>
						</div>
						<p className="p-2">Quick delivery</p>
					</div>
					<div className="d-flex justify-content-center align-items-center flex-column text-center">
						<div className="border border-3 rounded-circle p-3">
							<Image src={furnicap_easytoshop} className="w-3r" />
						</div>
						<p className="p-2">Easy to shop</p>
					</div>
					<div className="d-flex justify-content-center align-items-center flex-column text-center">
						<div className="border border-3 rounded-circle p-3">
							<Image src={furnicap_support} className="w-3r" />
						</div>
						<p className="p-2">24/7 support</p>
					</div>
				</div>
				<div className="d-flex justify-content-center align-items-center gap-3">
					<div className="d-flex justify-content-center align-items-center flex-column text-center">
						<div className="border border-3 rounded-circle p-3">
							<Image src={furnicap_easyreturn} className="w-3r" />
						</div>
						<p className="p-2">Easy returns</p>
					</div>
					<div className="d-flex justify-content-center align-items-center flex-column">
						<div className="border border-3 rounded-circle p-3">
							<Image
								src={furnicap_exceptionalservice}
								className="w-3r"
							/>
						</div>
						<p className="p-2">Excepional service</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeHeroMiddle;
