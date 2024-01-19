import { Card } from "@/components/ui";
import Image from "next/image";
import React from "react";

export const Description = () => {
	return (
		<Card className=" lg:overflow-">
			<div className="lg:flex lg:[&>*]:w-1/2 items-center">
				<div>
					<p className="font-medium text-sm uppercase">hello i am</p>
					<p className="mt-3 font-bold text-xl lg:text-4xl uppercase">
						<span className="text-blue"> Somtochukwu</span> Nnaji
					</p>
					<p className="lg:w-[8s0%] mt-4">
						Dedicated and detail-oriented Frontend Developer with over 2 years
						of hands-on experience in designing and implementing responsive web
						applications. Proficient in HTML, CSS, and JavaScript, with a strong
						understanding of modern frontend frameworks such as React and
						Nextjs. Eager to contribute technical expertise and creativity to a
						dynamic development team.
					</p>

					<div className="mt-6">
						<button className="max-w-320  p-2.5 px-5 text-xs leading-5 font-bold uppercase align-middle rounded-md border border-solid border-opacity-25 gap-3 text-white bg-secondary cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105">
							Download Resume
						</button>
					</div>
				</div>
				<div className="flex justify-center items-center  lg:justify-end lg:items-end">
					<Image
						className="flex"
						alt="my image"
						src={"/me.png"}
						width={400}
						height={400}></Image>
				</div>
			</div>
		</Card>
	);
};
