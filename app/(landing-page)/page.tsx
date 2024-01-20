import React from "react";
import { Navbar } from "@/components/ui";
import { Description, AboutMe } from "./_component";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Description />
			<AboutMe/>
		</div>
	);
};
export default Home;
