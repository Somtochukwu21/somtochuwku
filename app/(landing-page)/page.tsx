import React from "react";
import { Navbar } from "@/components/ui";
import { Description, AboutMe, Footer, Services } from "./_component";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Description />
			<AboutMe />
			<Services />
			<Footer />
		</div>
	);
};
export default Home;
