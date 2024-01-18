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

interface NavmenuInterface {
	link: string;
	href: string;
}

const navMenu: NavmenuInterface[] = [
	{
		link: "Home",
		href: "/",
	},
	{
		link: "About Me",
		href: "/about",
	},
	{
		link: "Expertise",
		href: "/expertise",
	},
];

export const DrawerAnchor = () => {
	const { toggleDrawer, state } = useToggleDrawer();

	const list = (anchor: string) => (
		<Box
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			<List>
				{navMenu.map((nav, idx) => (
					<ListItem key={idx}>
						<Link href={nav.href} className="block w-full">
							<ListItemButton>{nav.link}</ListItemButton>
						</Link>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<React.Fragment>
			<div className="lg:flex hidden">
				<ul className="flex space-x-4  capitalize font-medium text-lg">
					{navMenu.map((nav, idx) => (
						<li key={idx}>
							<Link href={nav.href}>{nav.link}</Link>
						</li>
					))}
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
