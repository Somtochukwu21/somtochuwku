import React from "react";
import { Navbar } from "@/components/ui";
import { Description, AboutMe, Footer } from "./_component";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Description />
			<AboutMe/>
			<Footer/>
		</div>
	);
};
export default Home;
