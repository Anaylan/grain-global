import * as Yup from "yup";

export const preRegisterSchema = Yup.object().shape({
	name: Yup.string().required("Please, enter your name!"),
	email: Yup.string()
		.email("Invalid Email Format")
		.required("Please, enter your email!"),
});
