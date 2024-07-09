import { Card } from "@/components/ui";
import gobet from "@/public/gobet-adminDashboard.png";
import loom from "@/public/loom-clone1.png";
import meal from "@/public/meal.png";
import piabalClubs from "@/public/piabal-clubs.png";
import shortly from "@/public/shortly.png";
import zigahLogin from "@/public/zigah-login.png";
import { CardContent, Card as JoyCard } from "@mui/joy";
import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

interface ServiceCardProp {
	children: ReactNode;
	icon: ReactNode;
	title: string;
	className?: string;
}

const ServiceCard: React.FC<ServiceCardProp> = ({
	children,
	icon,
	title,
	className,
}) => (
	<JoyCard className={className}>
		<CardContent>
			<div className="flex space-x-2 items-center">
				{icon}
				<h5 className="font-semibold capitalize my-2 text-xl">{title}</h5>
			</div>
			<p>{children}</p>
		</CardContent>
	</JoyCard>
);

export const Projects = () => (
	<Card className="my-4">
		<div>
			<h4 className="font-bold text-xl lg:text-4xl uppercase text-center">
				MY RECENT COMPLETED PROJECTS
			</h4>
			<p className="text-center">
				I specialize in creating captivating digital experiences that blend
				aesthetics, usability, and innovation.
			</p>
		</div>

		<div className="mt-4 mb-8">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<ProjectCards src={zigahLogin} title="Zigah Dashboard" />
				<ProjectCards src={meal} title="Meal" />
				<ProjectCards src={piabalClubs} title="Piabal Admin Dashboard" />
				<ProjectCards src={gobet} title="Go Bet" />
				<ProjectCards src={shortly} title="Shortly" />
				<ProjectCards src={loom} title="Loom Clone" />
			</div>
		</div>
	</Card>
);

interface ProjectCardsProps {
	src: StaticImageData;
	title: string;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ src, title }) => (
	<div className="card relative w-full h-[200px] bg-[#f2f2f2] flex items-center justify-center overflow-hidden shadow-lg transition-transform duration-500 ease-in-out rounded-lg hover:shadow-2xl hover:scale-105">
		<div className="w-full h-full">
			<Image alt="projects" src={src} className="w-full h-full object-cover" />
		</div>
		<div className=" card__content absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
			<p className=" text-2xl text-gray-50 font-bold m-0 capitalize">
				{title}
			</p>
			<p className="card__description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</div>
	</div>
);
