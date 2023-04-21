import { BoxWrapper, FlexBox } from "@/components/boxes";
import { preRegisterSchema } from "@/utils/validators/preRegister";
import { useFormik } from "formik";
import { error, success, empty } from "@/utils/colors";
import { Button } from "@/components/buttons/FormButton";
import { TextInput } from "@/components/input/TextInput";
import { Tooltip } from "@/components/tooltip";
import { NavLink } from "@/components/link";

import style from "./PreRegister.module.scss";

export const PreRegisterForm = ({ title }: { title: string }) => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
		},
		validationSchema: preRegisterSchema,
		onSubmit: (values, { resetForm }) => {
			alert(JSON.stringify(values, null, 2));
			console.log(values);
			resetForm();
		},
	});
	return (
		<BoxWrapper className={style["form"]}>
			<form
				onSubmit={formik.handleSubmit}
				className={`${style["form-wrapper"]}`}>
				<h1 className={style["form__title"]}>{title}</h1>
				<FlexBox
					className={`${style["form-wrapper__container"]}`}
					// flex
					// spacing={"4"}
				>
					{/* tooltip */}
					<Tooltip
					// padding='3'
					// borderRadius='xl'
					// hasArrow
					// label={formik.errors.name}
					>
						<TextInput
							// size={"lg"}
							// variant={"register"}
							// color={
							// 	formik.touched.name && formik.errors.name
							// 		? "#EF4F4F"
							// 		: "#34373C"
							// }
							className={
								formik.touched.name && formik.errors.name != null
									? // red
									  "error"
									: formik.errors.name == null && formik.values.name != ""
									? // green
									  "success"
									: //   gray
									  "empty"
							}
							name='name'
							value={formik.values.name}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							// onFocus={formik.handleBlur}
							// borderColor={
							// 	formik.touched.name && formik.errors.name != null
							// 		? // red
							// 		  error
							// 		: formik.errors.name == null && formik.values.name != ""
							// 		? // green
							// 		  success
							// 		: //   gray
							// 		  empty
							// }
							placeholder='What is your name?'
							type={"text"}
						/>
					</Tooltip>
					<Tooltip
						label={formik.errors.email}
						// padding='3'
						// borderRadius='xl'
						// hasArrow
						// label={formik.errors.email}
					>
						<TextInput
							name='email'
							// size={"lg"}
							// variant={"register"}
							// color={
							// 	formik.touched.email && formik.errors.email ? error : "#34373C"
							// }
							className={
								formik.touched.email && formik.errors.email != null
									? // red
									  "error"
									: formik.errors.email == null && formik.values.email != ""
									? // green
									  "success"
									: //   gray
									  "empty"
							}
							onBlur={formik.handleBlur}
							value={formik.values.email}
							onChange={formik.handleChange}
							// onFocus={formik.handleBlur}
							// borderColor={
							// 	formik.touched.email && formik.errors.email != null
							// 		? error
							// 		: formik.errors.email == null && formik.values.email != ""
							// 		? success
							// 		: empty
							// }
							placeholder='Email'
							type={"text"}
						/>
					</Tooltip>
				</FlexBox>

				<FlexBox
				// flex
				// spacing={"4"}
				>
					<div
						// width={{ "2xl": "50%", xl: "50%" }}
						className='half'>
						<p className={style["form__text"]}>
							By clicking on the “Sing Up” button, you agree to the{" "}
							<NavLink className='link__white__underline' href={"/privacy"}>
								privacy policy
							</NavLink>
						</p>
					</div>
					<Button
						type='submit'
						className='half'
						// width={"50%"}
						// variant={"solid"}
						// size='lg'
						// fontSize='1rem'
						// fontWeight={700}
						// _hover={{
						// 	background: "#01695B",
						// }}
						// _active={{
						// 	background: "#46A381",
						// }}
						// background={"#00B96B"}
					>
						Sign up
					</Button>
				</FlexBox>
			</form>
		</BoxWrapper>
	);
};
