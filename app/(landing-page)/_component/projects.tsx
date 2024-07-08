import { Card } from "@/components/ui";
import { CardContent, Card as JoyCard } from "@mui/joy";
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
				<div className="grid grid-cols-3 grid-rows-5 gap-4 ">
					<div className="row-span-3 [&>*]:h-full">
						<ProjectCards />
					</div>
					<div className="row-span-2 ">
						<ProjectCards />
					</div>
					<div className="row-span-3 [&>*]:h-full">
						<ProjectCards />
					</div>
					<div className="row-span-3 [&>*]:h-full col-start-2 row-start-3">
						<ProjectCards />
					</div>
					<div className="row-span-2 row-start-4">
						<ProjectCards />
					</div>
					<div className="row-span-2 col-start-3 row-start-4">
						<ProjectCards />
					</div>
				</div>
			</div>
		</Card>
	);
};

const ProjectCards = () => {
	return (
		<div className="card relative w-full h-[200px] bg-[#f2f2f2] flex items-center justify-center overflow-hidden shadow-[0_0_0_5px_#ffffff80] transition-all duration-[0.6s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] rounded-[10px] hover:shadow-[0_8px_16px_rgba(255,255,255,0.2)] hover:scale-105">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
			</svg>
			<div className="card__content">
				<p className="card__title">Card Title</p>
				<p className="card__description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco.
				</p>
			</div>
		</div>
	);
};
