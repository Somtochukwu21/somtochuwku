import { Card, CardContent } from "@mui/joy";

interface SkillItemProps {
	skill: string;
	percentage: string;
	className: string;
}

const SkillItem: React.FC<SkillItemProps> = ({
	skill,
	percentage,
	className,
}) => {
	return (
		<li className="mb-4">
			<div>
				<div className="flex justify-between items-center">
					<h3 className="text-xs md:text-sm md:font-semibold uppercase">{skill}</h3>
					<p className="text-xs md:text-sm">{percentage}</p>
				</div>
				<div className="bg-gray-300 w-full h-2 rounded">
					<div className={`h-2 bg-secondary rounded ${className}`}></div>
				</div>
			</div>
		</li>
	);
};

export const SoftSkillsList: React.FC = () => (
	<Card className="mt-4">
		<CardContent>
			<ul className="">
				<SkillItem
					skill="communication"
					percentage={"80%"}
					className="w-[80%]"
				/>
				<SkillItem
					skill="problem solving"
					percentage={"90%"}
					className="w-[90%]"
				/>
				<SkillItem
					skill="team collaboration"
					percentage={"95%"}
					className="w-[95%]"
				/>
				<SkillItem
					skill="attentiton to detail"
					percentage={"99%"}
					className="w-[99%]"
				/>
				<SkillItem
					skill="time management"
					percentage={"95%"}
					className="w-[95%]"
				/>
			</ul>
		</CardContent>
	</Card>
);
