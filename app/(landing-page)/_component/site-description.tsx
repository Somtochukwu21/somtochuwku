import { Card } from "@/components/ui";
import Image from "next/image";
import React from "react";

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
						<button className="max-w-320  p-2.5 px-5 text-xs leading-5 font-bold uppercase align-middle rounded-md border border-solid border-opacity-25 gap-3 text-white bg-secondary cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105">
							Download Resume
						</button>
					</div>
				</div>
				<div className="flex justify-center lg:justify-end">
					<div className="relative lg:group z-20">
						<div className="h-[30rem] w-[30rem] bg-secondary absolute -z-20 rounded-full -inset-y-7 -left-9 group-hover:scale-95 transition-transform duration-300"></div>

						<Image
							alt="My image"
							src={"/me.png"}
							height={400}
							width={400}
							className="group-hover:scale-105 transition-transform duration-300"
						/>
					</div>
				</div>
			</div>
		</Card>
	);
};
