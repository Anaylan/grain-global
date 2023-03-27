import * as Yup from "yup";

export const preRegisterSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Your name is too short")
		.required("Please, enter your name!"),
	email: Yup.string()
		.email("Invalid Email Format")
		.required("Please, enter your email!"),
});
