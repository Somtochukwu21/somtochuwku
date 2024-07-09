import { Card } from "../../../components/ui";

export const Footer = () => {

	return (
		<footer className="bg-[#1a2238] text-white py-12 px-4 lg:px-32">
			<Card>
				<div className="  grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Left Section */}
					<div>
						<h2 className="text-3xl font-bold mb-4">GET IN TOUCH</h2>
						<h1 className="text-4xl lg:text-5xl font-bold mb-4">
							Let&apos ;s Connect & Collaborate
						</h1>
						<p className="mb-8">
							Feel free to get in touch with me. I am always open to discussing
							new projects, creative ideas or opportunities to be part of your
							visions.
						</p>
						<div className="space-y-4">
							<div className="flex items-center space-x-4">
								<div className="bg-blue-600 p-3 rounded-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-white"
										viewBox="0 0 20 20"
										fill="currentColor">
										<path d="M2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm15 0H3v14h14V3zM8 5h4a1 1 0 110 2H8a1 1 0 010-2zM5 8h10a1 1 0 110 2H5a1 1 0 010-2zM5 11h10a1 1 0 110 2H5a1 1 0 010-2zM8 14h4a1 1 0 110 2H8a1 1 0 010-2z" />
									</svg>
								</div>
								<span>(+02)01211440054</span>
							</div>
							<div className="flex items-center space-x-4">
								<div className="bg-blue-600 p-3 rounded-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-white"
										viewBox="0 0 20 20"
										fill="currentColor">
										<path d="M2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm15 0H3v14h14V3zM8 5h4a1 1 0 110 2H8a1 1 0 010-2zM5 8h10a1 1 0 110 2H5a1 1 0 010-2zM5 11h10a1 1 0 110 2H5a1 1 0 010-2zM8 14h4a1 1 0 110 2H8a1 1 0 010-2z" />
									</svg>
								</div>
								<span>mohamedwalid.mh@gmail.com</span>
							</div>
							<div className="flex items-center space-x-4">
								<div className="bg-blue-600 p-3 rounded-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-white"
										viewBox="0 0 20 20"
										fill="currentColor">
										<path d="M2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm15 0H3v14h14V3zM8 5h4a1 1 0 110 2H8a1 1 0 010-2zM5 8h10a1 1 0 110 2H5a1 1 0 010-2zM5 11h10a1 1 0 110 2H5a1 1 0 010-2zM8 14h4a1 1 0 110 2H8a1 1 0 010-2z" />
									</svg>
								</div>
								<span>Portsaid, Egypt</span>
							</div>
						</div>
					</div>

					{/* Right Section */}
					<div className="bg-[#0f172a] p-8 rounded-lg">
						<form className="space-y-4">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
								<input
									type="text"
									placeholder="Name"
									className="p-4 bg-[#1e293b] rounded-lg focus:outline-none"
								/>
								<input
									type="email"
									placeholder="Email"
									className="p-4 bg-[#1e293b] rounded-lg focus:outline-none"
								/>
							</div>
							<input
								type="text"
								placeholder="Subject"
								className="w-full p-4 bg-[#1e293b] rounded-lg focus:outline-none"
							/>
							<textarea
								placeholder="Message"
								className="w-full p-4 bg-[#1e293b] rounded-lg focus:outline-none h-40"></textarea>
							<button
								type="submit"
								className="w-full py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700">
								Send Message
							</button>
						</form>
					</div>
				</div>
			</Card>
		</footer>
	);

 


	// <footer className="bg-secondary text-white p-4 text-center ">
	// 	<p>&copy; 2024 Somtochukwu. All rights reserved.</p>
	// </footer>
};
