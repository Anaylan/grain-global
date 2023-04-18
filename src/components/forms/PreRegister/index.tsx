import { BoxWrapper } from "@/components/boxes";
import { preRegisterSchema } from "@/utils/validators/preRegister";
import { useFormik } from "formik";
import { error, success, empty } from "@/utils/colors";

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
		<form
			style={{
				width: "100%",
			}}
			onSubmit={formik.handleSubmit}>
			<BoxWrapper
				// display='flex'
				// marginTop={"72px"}
				// width='100%'
				// backgroundColor={backgroundColor}
				// flexDirection={"column"}
				className='form'
				// gap='5'
			>
				<h1
				// fontSize='18px'
				// maxW={{ "2xl": "65%", base: "100%" }}
				// lineHeight='140%'
				// fontWeight={"400"}
				>
					{title}
				</h1>
				<div
				// flex
				// spacing={"4"}
				>
					{/* tooltip */}
					<div
					// padding='3'
					// borderRadius='xl'
					// hasArrow
					// label={formik.errors.name}
					>
						<input
							// size={"lg"}
							// variant={"register"}
							// color={
							// 	formik.touched.name && formik.errors.name
							// 		? "#EF4F4F"
							// 		: "#34373C"
							// }
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
					</div>
					<div
					// padding='3'
					// borderRadius='xl'
					// hasArrow
					// label={formik.errors.email}
					>
						<input
							name='email'
							// size={"lg"}
							// variant={"register"}
							// color={
							// 	formik.touched.email && formik.errors.email ? error : "#34373C"
							// }
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
					</div>
				</div>

				<div
				// flex
				// spacing={"4"}
				>
					<div
					// width={{ "2xl": "50%", xl: "50%" }}
					>
						<p
						// fontWeight={400}
						// fontStyle='normal'
						// lineHeight='120%'
						// fontSize='14px'
						>
							By clicking on the “Sing Up” button, you agree to the{" "}
							<a href={"/privacy"} style={{ textDecoration: "underline" }}>
								privacy policy
							</a>
						</p>
					</div>
					<button
						type='submit'
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
					</button>
				</div>
			</BoxWrapper>
		</form>
	);
};
