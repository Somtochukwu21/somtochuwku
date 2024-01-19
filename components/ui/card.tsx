import React, { ReactNode } from "react";
interface CardProps {
	className?: string;
	children: ReactNode;
}
export const Card = ({ className, children }: CardProps) => {
	return (
		<div className={`bg-primary pt-20  lg:px-20 ${className}`}>
			<div className="w-full px-4  m-auto max-w-[1200px]">{children}</div>
		</div>
	);
};
