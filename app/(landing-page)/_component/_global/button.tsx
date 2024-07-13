import { ReactNode } from "react";

export const Button = ({
	children,
	disabled,
	classN,
}: {
	children: ReactNode;
	classN?: string;
	disabled?: boolean;
}) => {
	return (
		<button
			className={`max-w-320  p-2.5 px-5 text-xs leading-5 font-bold uppercase align-middle rounded-md border border-solid border-opacity-25 gap-3 cursor-pointer transition-all duration-300 ease-in-out transform active:scale-95 ${classN}
      `}
			disabled={disabled}>
			{children}
		</button>
	);
};
