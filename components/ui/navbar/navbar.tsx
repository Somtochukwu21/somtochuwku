import React from "react";
import { GiFastArrow } from "react-icons/gi";
import Link from "next/link";
import { NavigationMenu } from "./_component";

export const Navbar = () => {
	return (
		<div className="flex items-center w-full justify-between md:pr-10 sticky bg-[#DAE9FD] h-24 top-0 z-50 lg:px-20">
			<div className="w-full flex items-center justify-between pr-10 sticky h-24 top-0 z-50 lg:px-20">
				<div className="px-4">
					<div className="w-40">
						<Link href={"/"}>
							<GiFastArrow className="text-3xl" />
						</Link>
					</div>
				</div>
				<div>
					<NavigationMenu />
				</div>
			</div>
		</div>
	);
};
