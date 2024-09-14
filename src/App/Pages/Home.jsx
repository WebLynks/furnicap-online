import About from '../Components/About';
import Footer from '../Components/Footer';
import HomeHeroMiddle from '../Components/HomeHeroMiddle/HomeHeroMiddle';
import HomeHeroTop from '../Components/HomeHeroTop/HomeHeroTop';

function Home() {
	return (
		<>
			<HomeHeroTop />
			<About />
			<HomeHeroMiddle />
			<Footer />
		</>
	);
}

export default Home;
