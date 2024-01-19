"use client";
import React from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import { RiMenu4Line } from "react-icons/ri";
import ButtonGroup from "@mui/joy/ButtonGroup";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import { useToggleDrawer } from "../_hook";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavmenuInterface {
	title: string;
	path: string;
}

const navMenu: NavmenuInterface[] = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About Me",
		path: "/about",
	},
	{
		title: "Expertise",
		path: "/expertise",
	},
];

export const NavigationMenu = () => {
	const { toggleDrawer, state } = useToggleDrawer();
	const pathName = usePathname();

	const list = (anchor: string) => (
		<Box
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			<List>
				{navMenu.map((nav) => (
					<ListItem key={nav.title}>
						<Link href={nav.path} className="block w-full ">
							<ListItemButton>{nav.title}</ListItemButton>
						</Link>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<React.Fragment>
			<div className="lg:flex hidden">
				<ul className="flex space-x-4  capitalize font-medium">
					{navMenu.map((nav) => {
						const isActive = pathName.startsWith(nav.path);
						return (
							<li
								key={nav.title}
								className={`uppercase transition-all ${
									isActive ? "text-blue" : "hover:text-blue"
								}`}>
								<Link href={nav.path}>{nav.title}</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<div />

			<div className="block lg:hidden">
				<ButtonGroup variant="outlined">
					<div
						className="border-none p-0 hover:bg-transparent"
						onClick={toggleDrawer("left", true)}>
						<RiMenu4Line className="text-4xl" />
					</div>
				</ButtonGroup>

				<Drawer
					anchor={"left"}
					open={state["left"]}
					onClose={toggleDrawer("left", false)}>
					{list("left")}
				</Drawer>
			</div>
		</React.Fragment>
	);
};
