import { Navbar } from "../../components/ui";
import { AboutMe, Description, Footer, Projects, Services } from "./_component";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Description />
			<AboutMe />
			<Services />
			<Projects />
			<Footer />
		</div>
	);
};
export default Home;
