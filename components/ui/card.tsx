import React, { ReactNode } from "react";
interface CardProps {
	className?: string;
	children: ReactNode;
}
export const Card = ({ className, children }: CardProps) => {
	return (
		<div className={`pt-9 lg:pt-20 md:px-20 ${className}`}>
			<div className="w-full px-4  m-auto max-w-[1200px]">{children}</div>
		</div>
	);
};
