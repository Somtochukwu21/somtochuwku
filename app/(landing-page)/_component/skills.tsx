import { Card } from "@mui/joy";
import React from "react";
import { MdCheck } from "react-icons/md";
import { SoftSkillsList } from "./soft-skill-list";

const skills: string[] = [
	"HTML, CSS, JavaScript,",
	"Tailwindcss, Bootstrap, Scss,",
	"React, Next, Typescript",
	"Git, Github, Webpack",
];

const ProgrammingSkills = () => (
	<Card className="bg-light">
		{skills.map((item) => (
			<div key={item} className="flex items-center space-x-2">
				<MdCheck className="text-blue text-xl" />
				<p>{item}</p>
			</div>
		))}
	</Card>
);

export const Skills = () => {
	return (
		<div className="mt-6 lg:mt-0">
			<ProgrammingSkills />
			<SoftSkillsList />
		</div>
	);
};
