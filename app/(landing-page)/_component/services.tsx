import { Card } from "@/components/ui";
import { Card as JoyCard, CardContent } from "@mui/joy";
import React, { ReactNode } from "react";
import { FaLaptopCode, FaCode } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";

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
export const Services = () => {
	return (
		<Card className="my-4 ">
			<div>
				<h4 className="font-bold text-xl lg:text-4xl uppercase text-center">
					my services
				</h4>
				<p className="text-center">
					I specialize in creating captivating digital experiences that blend
					aesthetics, usability, and innovation.
				</p>
			</div>
			<div className="lg:flex lg:[&>*]:w-1/3 lg:space-x-4 mt-5">
				<ServiceCard
					icon={<FaLaptopCode className="text-4xl text-blue" />}
					title="web development">
					I specialize in crafting visually appealing, high-performance websites
					that seamlessly blend creativity with technical expertise for an
					enhanced user experience.
				</ServiceCard>

				<ServiceCard
					icon={<FaCode className="text-4xl text-blue" />}
					title="Graphics Design"
					className="my-3">
					Designing eye catching visuals for branding, marketing, and digital
					needs,emphasizing aesthetics and design principles
				</ServiceCard>

				<ServiceCard
					icon={<MdDesignServices className="text-4xl text-blue" />}
					title="ui/ux designer">
					I merge frontend development with a keen eye for UI/UX design,
					creating visually captivating and intuitive interfaces for enhanced
					user experiences in web/mobile applications.
				</ServiceCard>
			</div>
		</Card>
	);
};
