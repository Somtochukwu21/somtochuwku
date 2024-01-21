import { Card } from "@/components/ui";
import { CareerSnapshot } from "./career-snapshot";
import { Skills } from "./skills";
import { CardContent } from "@mui/joy";

export const AboutMe = () => {
	return (
		<Card className="bg-light">
			<CardContent>
				<div className="lg:flex lg:[&>*]:w-1/2 lg:space-x-8">
					<div>
						<h4 className="font-bold text-xl lg:text-4xl uppercase">
							About me
						</h4>
						<p className="mt-3">
							Adaptable Frontend Developer skilled in crafting visually
							appealing web applications using HTML, CSS, and JavaScript.
							Proficient in React and Vue frameworks, with a collaborative
							mindset and a passion for clean, efficient code. Ready to
							contribute creative solutions to dynamic projects.
						</p>
						<CareerSnapshot />
					</div>
					<Skills />
				</div>
			</CardContent>
		</Card>
	);
};
