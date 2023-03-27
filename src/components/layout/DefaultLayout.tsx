import { Box, Container } from "@chakra-ui/react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { DefaultFooter } from "./footer/DefaultFooter";
import { DefaultNavigation } from "./navigation/DefaultNavigation";

export default function DefaultLayout() {
	return (
		<Fragment>
			<DefaultNavigation />
			<Container
				zIndex='30'
				display={"flex"}
				marginTop={{ md: "0", base: "110px" }}
				alignItems='center'
				as={"main"}
				id='content'>
				<Outlet />
			</Container>
			<DefaultFooter />
			<Box
				as='span'
				position={"absolute"}
				zIndex='1'
				width='100vw'
				height={{ md: "100%", base: "420px" }}
				_before={{
					content: '""',
					width: "100vw",
					height: { md: "100%", base: "420px" },
					backgroundImage: "/bg.png",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: {
						"2xl": "top left",
						xl: "center",
						lg: "center",
						base: "center",
					},
					position: "absolute",
				}}
				_after={{
					content: '""',
					width: "100vw",
					height: { md: "0", base: "114px" },
					position: "absolute",
					bottom: "0",
					left: "0",
					background:
						"linear-gradient(180deg, #021524 0%, rgba(2, 21, 36, 0) 100%)",
					transform: "matrix(1, 0, 0, -1, 0, 0)",
				}}
			/>
		</Fragment>
	);
}
