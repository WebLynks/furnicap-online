import About from '../Components/About';
import Footer from '../Components/Footer';
import HomeHeroMiddle from '../Components/HomeHeroMiddle/HomeHeroMiddle';
import HomeHeroTop from '../Components/HomeHeroTop/HomeHeroTop';
import HeroBottom from '../Components/HeroBottom/HeroBottom';
import ProductsSection from '../Components/ProductsSection';
import CategorySection from '../Components/CategorySection';

function Home() {
	return (
		<>
			<HomeHeroTop />
			<About />
			<HomeHeroMiddle />
			<ProductsSection />
			<CategorySection />
			<HeroBottom />
			<Footer />
		</>
	);
}

export default Home;
