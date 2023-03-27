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

export const PreRegisterForm = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
		},
		validationSchema: preRegisterSchema,
		onSubmit: (values, { resetForm }) => {
			alert(JSON.stringify(values, null, 2));

			resetForm();
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<BoxWrapper
				display='flex'
				marginTop={"72px"}
				flexDirection={"column"}
				gap='5'>
				<Heading
					fontSize='18px'
					maxW={{ "2xl": "65%", base: "100%" }}
					lineHeight='140%'
					fontWeight={"400"}>
					Give your email and receive a notification about the start of trading
					notification
				</Heading>
				<HStack spacing={"4"}>
					<Tooltip
						padding='3'
						borderRadius='xl'
						hasArrow
						label={formik.errors.name}>
						<Input
							size={"lg"}
							variant={"outlined"}
							color={formik.errors.name ? "#EF4F4F" : "#34373C"}
							name='name'
							value={formik.values.name}
							onChange={formik.handleChange}
							borderColor={
								formik.errors.name != null
									? "#EF4F4F"
									: formik.errors.name == null && formik.values.name != ""
									? "#34B829"
									: "#919191"
							}
							borderWidth='1px'
							placeholder='What is your name?'
							type={"text"}
							fontWeight='700'
						/>
					</Tooltip>
					<Tooltip
						padding='3'
						borderRadius='xl'
						hasArrow
						label={formik.errors.email}>
						<Input
							size={"lg"}
							variant={"outlined"}
							color={formik.errors.email ? "#EF4F4F" : "#34373C"}
							name='email'
							value={formik.values.email}
							onChange={formik.handleChange}
							borderColor={
								formik.errors.email != null
									? "#EF4F4F"
									: formik.errors.email == null && formik.values.email != ""
									? "#34B829"
									: "#919191"
							}
							borderWidth='1px'
							fontWeight='700'
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
