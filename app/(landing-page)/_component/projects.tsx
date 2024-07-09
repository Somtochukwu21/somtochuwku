import { Card } from "@/components/ui";
import gobet from "@/public/gobet-adminDashboard.png";
import loom from "@/public/loom-clone1.png";
import meal from "@/public/meal.png";
import piabal from "@/public/piabal-createpredictions.png";
import shortly from "@/public/shortly.png";
import zigah from "@/public/zigah-dashboard.png";
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
	<JoyCard className={`${className}`}>
		<CardContent>
			<div className="flex space-x-2 items-center">
				{icon}
				<h5 className="font-semibold capitalize my-2 text-xl">{title}</h5>
			</div>
			<p>{children}</p>
		</CardContent>
	</JoyCard>
);

export const Projects = () => {
	return (
		<Card className="my-4 ">
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
				<div className="lg:grid grid-cols-3 grid-rows-5 gap-4 ">
					<div className="row-span-3 [&>*]:h-full">
						<ProjectCards src={zigah} title="Zigah Dashboard" bottom="mb-2" />
					</div>
					<div className="row-span-2 ">
						<ProjectCards src={meal} title="meal" display="hidden" />
					</div>
					<div className="row-span-3 [&>*]:h-full">
						<ProjectCards
							src={piabal}
							title="Piabal Admin Dashboard"
							bottom="mb-2"
						/>
					</div>
					<div className="row-span-3 [&>*]:h-full col-start-2 row-start-3">
						<ProjectCards src={gobet} title="go bet" bottom="mb-2" />
					</div>
					<div className="row-span-2 row-start-4">
						<ProjectCards src={shortly} title="shortly" display="hidden" />
					</div>
					<div className="row-span-2 col-start-3 row-start-4">
						<ProjectCards src={loom} title="Loom Clone" display="hidden" />
					</div>
				</div>
			</div>
		</Card>
	);
};

interface ProjectCards {
	src: StaticImageData;
	display?: string;
	bottom?: string;
	title: string;
}
const ProjectCards = ({ src, title, display, bottom }: ProjectCards) => {
	return (
		<div className="card relative w-full h-[200px] bg-[#f2f2f2] flex items-center justify-center overflow-hidden shadow-[0_0_0_5px_#ffffff80] transition-all duration-[0.6s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] rounded-[10px] hover:shadow-[0_8px_16px_rgba(255,255,255,0.2)] hover:scale-105">
			<div className="[&>*]:w-full w-full h-full">
				<div className={`${bottom}`}>
					<Image alt="projects" className="w-full h-full" src={src} />
				</div>
				<div className={`${display}`}>
					<Image alt="projects" className="w-full h-fulll" src={src} />
				</div>
			</div>
			<div className="card__content">
				<p className="card__title capitalize">{title}</p>
				<p className="card__description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco.
				</p>
			</div>
		</div>
	);
};
