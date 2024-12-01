import About from '../Sections/AboutSection';
import Footer from '../Sections/Footer';
import HomeHeroMiddle from '../Components/HomeHeroMiddle/HomeHeroMiddle';
import HomeHeroTop from '../Components/HomeHeroTop/HomeHeroTop';
import HeroBottom from '../Components/HeroBottom/HeroBottom';
import ProductsSection from '../Sections/ProductsSection';
import CategorySection from '../Sections/CategorySection';
import TestimonialsSection from '../Sections/TestimonialsSection';
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

	// scroll to top on page load smoothly
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

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
