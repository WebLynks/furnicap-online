import About from '../Components/About';
import Footer from '../Components/Footer';
import HomeHeroMiddle from '../Components/HomeHeroMiddle/HomeHeroMiddle';
import HomeHeroTop from '../Components/HomeHeroTop/HomeHeroTop';
import HeroBottom from '../Components/HeroBottom/HeroBottom';
import ProductsSection from '../Components/ProductsSection';
import CategorySection from '../Components/CategorySection';
import TestimonialsSection from '../Components/TestimonialsSection';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
	const { hash } = useLocation();

	useEffect(() => {
		if (hash) {
			const element = document.getElementById(hash.substring(1));
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [hash]);

	return (
		<>
			<HomeHeroTop />
			<About />
			<HomeHeroMiddle />
			<ProductsSection />
			<CategorySection />
			<TestimonialsSection />
			<HeroBottom />
			<Footer />
		</>
	);
}

export default Home;
