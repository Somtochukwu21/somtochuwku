"use client";

import Link from "next/link";
import React from "react";
import { Card } from "../../../../components/ui";
import { Form } from "./form";
export const Footer: React.FC = () => {
	return (
		<footer>
			<Card className="bg-secondary text-white py-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Left Section */}
					<div>
						<h2 className="text-3xl font-bold mb-4">GET IN TOUCH</h2>
						<h1 className="text-4xl lg:text-5xl font-bold mb-4">
							Let&apos;s Connect & Collaborate
						</h1>
						<p className="mb-8">
							Feel free to get in touch with me. I am always open to discussing
							new projects, creative ideas or opportunities to be part of your
							visions.
						</p>
						<div className="space-y-4">
							<div className="flex items-center space-x-4">
								<div className="bg-blue-600 p-3 rounded-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-white"
										viewBox="0 0 20 20"
										fill="currentColor">
										<path d="M2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm15 0H3v14h14V3zM8 5h4a1 1 0 110 2H8a1 1 0 010-2zM5 8h10a1 1 0 110 2H5a1 1 0 010-2zM5 11h10a1 1 0 110 2H5a1 1 0 010-2zM8 14h4a1 1 0 110 2H8a1 1 0 010-2z" />
									</svg>
								</div>
								<Link href="https://wa.link/t3y382" target="_blank">
									<span>(+234) 9022398734</span>
								</Link>
							</div>
							<div className="flex items-center space-x-4">
								<div className="bg-blue-600 p-3 rounded-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-white"
										viewBox="0 0 20 20"
										fill="currentColor">
										<path d="M2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm15 0H3v14h14V3zM8 5h4a1 1 0 110 2H8a1 1 0 010-2zM5 8h10a1 1 0 110 2H5a1 1 0 010-2zM5 11h10a1 1 0 110 2H5a1 1 0 010-2zM8 14h4a1 1 0 110 2H8a1 1 0 010-2z" />
									</svg>
								</div>
								<span>lyon4197@gmail.com</span>
							</div>
							<div className="flex items-center space-x-4">
								<div className="bg-blue-600 p-3 rounded-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-white"
										viewBox="0 0 20 20"
										fill="currentColor">
										<path d="M2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm15 0H3v14h14V3zM8 5h4a1 1 0 110 2H8a1 1 0 010-2zM5 8h10a1 1 0 110 2H5a1 1 0 010-2zM5 11h10a1 1 0 110 2H5a1 1 0 010-2zM8 14h4a1 1 0 110 2H8a1 1 0 010-2z" />
									</svg>
								</div>
								<span>Anambra, Awka</span>
							</div>
						</div>
					</div>

					<div className="bg-[#1a2238] p-8 rounded-lg">
						<Form />{" "}
					</div>
				</div>
			</Card>
		</footer>
	);
};
