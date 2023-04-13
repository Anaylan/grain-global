import { BoxWrapper } from "@/components/boxes";
import { Link } from "react-router-dom";
import { preRegisterSchema } from "@/utils/validators/preRegister";
import {
	Heading,
	HStack,
	Tooltip,
	Input,
	Button,
	Text,
	Box,
} from "@chakra-ui/react";
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
				display='flex'
				marginTop={"72px"}
				width='100%'
				flexDirection={"column"}
				gap='5'>
				<Heading
					fontSize='18px'
					maxW={{ "2xl": "65%", base: "100%" }}
					lineHeight='140%'
					fontWeight={"400"}>
					{title}
				</Heading>
				<HStack spacing={"4"}>
					{/* Поменять шрифт */}
					<Tooltip
						padding='3'
						borderRadius='xl'
						hasArrow
						label={formik.errors.name}>
						<Input
							size={"lg"}
							variant={"register"}
							color={
								formik.touched.name && formik.errors.name
									? "#EF4F4F"
									: "#34373C"
							}
							name='name'
							value={formik.values.name}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							// onFocus={formik.handleBlur}
							borderColor={
								formik.touched.name && formik.errors.name != null
									? // red
									  error
									: formik.errors.name == null && formik.values.name != ""
									? // green
									  success
									: //   gray
									  empty
							}
							placeholder='What is your name?'
							type={"text"}
						/>
					</Tooltip>
					<Tooltip
						padding='3'
						borderRadius='xl'
						hasArrow
						label={formik.errors.email}>
						<Input
							name='email'
							size={"lg"}
							variant={"register"}
							color={
								formik.touched.email && formik.errors.email ? error : "#34373C"
							}
							onBlur={formik.handleBlur}
							value={formik.values.email}
							onChange={formik.handleChange}
							// onFocus={formik.handleBlur}
							borderColor={
								formik.touched.email && formik.errors.email != null
									? error
									: formik.errors.email == null && formik.values.email != ""
									? success
									: empty
							}
							placeholder='Email'
							type={"text"}
						/>
					</Tooltip>
				</HStack>

				<HStack spacing={"4"}>
					<Box width={{ "2xl": "50%", xl: "50%" }}>
						<Text
							fontWeight={400}
							fontStyle='normal'
							lineHeight='120%'
							fontSize='14px'>
							By clicking on the “Sing Up” button, you agree to the{" "}
							<Link to={"/privacy"} style={{ textDecoration: "underline" }}>
								privacy policy
							</Link>
						</Text>
					</Box>
					<Button
						type='submit'
						width={"50%"}
						variant={"solid"}
						size='lg'
						fontSize='1rem'
						fontWeight={700}
						_hover={{
							background: "#01695B",
						}}
						_active={{
							background: "#46A381",
						}}
						background={"#00B96B"}>
						Sign up
					</Button>
				</HStack>
			</BoxWrapper>
		</form>
	);
};
