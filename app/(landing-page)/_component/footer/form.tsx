import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { Button } from "../_global";

interface FormValues {
	username: string;
	email: string;
	message: string;
	subject: string;
}

export const Form = () => {
	const form = useForm<FormValues>();
	const { formState, register, handleSubmit } = form;
	const { errors, isLoading } = formState;

	const sendMail = (data: FormValues) => {
		emailjs
			.send("service_wy3jmfd", "template_29n6npl", data, "EIjoH4eYO1yQseyCR")
			.then(
				(response) => {
					console.log("SUCCESS!", response.status, response.text);
					alert("Message sent successfully!");
				},
				(err) => {
					console.log("FAILED...", err);
					alert("Failed to send message. Please try again.");
				}
			);
		console.log(data);
	};
	return (
		<form className="space-y-4" onSubmit={handleSubmit(sendMail)} noValidate>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<div>
					<input
						type="text"
						placeholder="Name"
						{...register("username", { required: "Username is required" })}
						className={` p-4 bg-[#1e293b] rounded-lg focus:outline-none w-full  ${
							errors.email?.message && "border-red-400 border"
						}`}
					/>
					<p className="text-red-400 text-sm mt-3">
						{errors.username?.message}
					</p>
				</div>
				<div>
					<input
						type="email"
						{...register("email", {
							required: {
								value: true,
								message: "email is required",
							},
							pattern: {
								value:
									/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
								message: "Invalid email format",
							},
						})}
						placeholder="Email"
						className={`p-4 bg-[#1e293b] rounded-lg focus:outline-none w-full  ${
							errors.email?.message && "border-red-400 border"
						}`}
					/>
					<p className="text-red-400 text-sm mt-3">{errors.email?.message}</p>
				</div>
			</div>
			<input
				type="text"
				{...register("subject", { required: "Subject is required" })}
				placeholder="Subject"
				className={`w-full p-4 bg-[#1e293b] rounded-lg focus:outline-none  ${
					errors.subject?.message && "border-red-400 border"
				}`}
			/>
			<p className="text-red-400 text-sm mt-3">{errors.subject?.message}</p>

			<textarea
				{...register("message", { required: "Message is required" })}
				placeholder="Message"
				className={`w-full p-4 bg-[#1e293b] rounded-lg focus:outline-none h-40 ${
					errors.message?.message && "border-red-400 border"
				}`}></textarea>
			<p className="text-red-400 text-sm mt-3">{errors.message?.message}</p>

			<Button
				text="Send Message"
				classN="w-full border-0 py-4 bg-primary text-black"
			/>
		</form>
	);
};
