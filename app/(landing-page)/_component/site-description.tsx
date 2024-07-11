import { Card } from "@/components/ui";
import Image from "next/image";
import React from "react";
import { Button } from "./_global";
interface TextOnImageProps {
	text: string;
	className?: string;
}

const TextOnImage: React.FC<TextOnImageProps> = ({ text, className }) => (
	<p
		className={`bg-white w-auto bg-opacity-50 backdrop-blur-xl absolute text-xs p-3 rounded group-over:animate-bounce font-bold uppercase ${className}`}>
		{text}
	</p>
);

export const Description = () => {
	return (
		<Card className="lg:overflow-clip bg-primary">
			<div className="lg:flex lg:[&>*]:w-1/2 items-center lg:pb-0">
				<div className="mb-12 lg:mb-0">
					<h3 className="font-medium text-sm uppercase">hello i am</h3>
					<h1 className="mt-3 font-bold text-xl lg:text-4xl uppercase">
						<span className="text-blue"> Somtochukwu</span> Nnaji
					</h1>
					<p className="lg:w-[8s0%] mt-4">
						Dedicated and detail-oriented Frontend Developer with over 2 years
						of hands-on experience in designing and implementing responsive web
						applications. Proficient in HTML, CSS, and JavaScript, with a strong
						understanding of modern frontend frameworks such as React and
						Nextjs.
					</p>

					<div className="mt-6">
						<Button text="	Download Resume" classN="bg-secondary" />
					</div>
				</div>
				<div className="flex justify-center lg:justify-end">
					<div className="relative group z-20">
						<div className="h-72 w-72 lg:h-[30rem] lg:w-[30rem] bg-secondary absolute -z-20 rounded-full -inset-y-7 -left-6 lg:-left-9 lg:group-hover:scale-95 transition-all duration-300"></div>
						<TextOnImage
							text="Web Development"
							className="-left-10 lg:left-0"
						/>
						<TextOnImage
							text="Graphic Design"
							className="-right-8 lg:-right-4"
						/>
						<TextOnImage
							text="Web Design"
							className="top-24 -left-10 lg:top-40 lg:-left-16 "
						/>
						<Image
							alt="My image"
							src={"/me.png"}
							height={400}
							width={400}
							className="lg:group-hover:scale-105 transition-all duration-300 w-60 lg:h-auto lg:w-auto"
						/>
					</div>
				</div>
			</div>
		</Card>
	);
};
