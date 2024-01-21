import React from "react";
import { Card, CardContent } from "@mui/joy";
import { GiAchievement } from "react-icons/gi";
import { FaUserClock } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
interface CareerCardProp {
	icon: React.ReactNode;
	numbers: string;
	text: string;
}

const CareerCard = ({ icon, text, numbers }: CareerCardProp) => (
	<Card className="bg-light">
		<CardContent className="text-center">
			<div className="text-blue text-xl">{icon}</div>
			<p className="text-blue text-2xl ">{numbers}</p>
			<p className="uppercase text-xs">{text}</p>
		</CardContent>
	</Card>
);

export const CareerSnapshot = () => {
	return (
		<div className="flex space-x-2 mt-4">
			<CareerCard icon={<FaUserClock />} text="years experience" numbers="2+" />
			<CareerCard
				icon={<GiAchievement />}
				text="projects completed"
				numbers="10+"
			/>
			<CareerCard icon={<BiSolidLike />} text="recommendation" numbers="4+" />
		</div>
	);
};
