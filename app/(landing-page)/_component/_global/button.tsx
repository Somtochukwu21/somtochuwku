export const Button = ({ text, classN }: { text: string; classN: string }) => {
	return (
		<button
			className={`max-w-320  p-2.5 px-5 text-xs leading-5 font-bold uppercase align-middle rounded-md border border-solid border-opacity-25 gap-3 text-white  cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 ${classN}
      `}>
			{text}
		</button>
	);
};
