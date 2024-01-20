import React from "react";
import { GiFastArrow } from "react-icons/gi";
import Link from "next/link";
import { NavigationMenu } from "./_component";

export const Navbar = () => {
	return (
		<div className="flex items-center w-full justify-between sticky bg-primary h-24 top-0 z-50 md:px-20">
			<div className="w-full px-4 flex items-center justify-between sticky h-24 top-0 z-50 lg:px-0 m-auto max-w-[1200px]">
				<div className="">
					<div className="w-40">
						<Link href={"/"} className="flex items-end space-x-1">
							<GiFastArrow className="text-3xl"/>
							<p className="font-bold uppercase">Praiz</p>
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
