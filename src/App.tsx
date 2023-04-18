// import { Flex, Heading, VStack } from "@chakra-ui/react";
import DefaultLayout from "./components/layout/DefaultLayout";
import { SliderItem, SliderItemProps } from "./components/slider/Item";
import { Fragment } from "react";
import { BoxWrapper } from "./components/boxes";
import { PreRegisterForm } from "./components/forms/PreRegister";
import { Slider } from "./components/slider/Wrapper";

import "@/assets/scss/reset.scss";
import "@/assets/scss/globals.scss";

// const theme = extendTheme({
// 	fonts: {
// 		// -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
// 		heading: `Lato, Corbel, sans-serif`,
// 		body: `Lato, Alatsi, sans-serif`,
// 		mono: `'Lato', sans-serif`,
// 	},
// 	styles: {
// 		global: {
// 			"html, body": {
// 				minHeight: "100vh",
// 				minWidth: "100vw",
// 				maxWidth: "100vw",
// 				overflowX: "hidden",
// 			},
// 			body: {
// 				overflow: "hidden",
// 				color: "white",
// 				backgroundColor: "#021524",
// 				position: "relative",
// 			},
// 			"#root": {
// 				minHeight: "100vh",
// 				display: "flex",
// 				maxWidth: "100vw",
// 				width: "100vw",
// 				flexDirection: "column",
// 			},
// 			"#content": {
// 				flex: "1 1 auto",
// 				overflowX: "hidden",
// 			},
// 			".link.active": {
// 				color: "#34B829",
// 				textDecoration: "underline",
// 			},
// 			".dot.active": {
// 				backgroundColor: "#34B829",
// 			},
// 		},
// 	},
// 	components: {
// 		Input,
// 		Container,
// 	},
// });

const SLIDER_MAIN_PAGE: SliderItemProps[] = [
	{
		children: (
			<>
				Expand your market by selling to new customers and buying from new
				suppliers
			</>
		),
	},
	{
		children: (
			<>Engage in legally binding negotiations through an online meeting room</>
		),
	},
	{
		children: (
			<>Enjoy comprehensive support throughout the entire transaction process</>
		),
	},
	{
		children: (
			<>Benefit from a wide range of user-friendly tools and features</>
		),
	},
	{
		children: <>Effortlessly establish new business partnerships</>,
	},
];

function App() {
	return (
		<Fragment>
			<DefaultLayout>
				<div
				// flex column
				// alignItems={"flex-start"}
				// maxW={{ "2xl": "700px", md: "550px", base: "100%" }}
				// spacing={0}
				>
					<div
					// flex column
					// spacing={"4"} alignItems='flex-start'
					>
						<h1

						// fontWeight='700'
						// fontSize={{ "2xl": "56px", base: "36px" }}
						// letterSpacing={"-0.01em"}
						// fontStyle='normal'
						// lineHeight='120%'
						>
							Food and feed worldwide
							<br />
							online trading platform
						</h1>
						<h1
						// lineHeight={"120%"}
						// fontWeight='600'
						// letterSpacing='-0.01em'
						// fontSize={{ xl: "32px", base: "24px" }}
						>
							Pre-registration
						</h1>
					</div>
					<PreRegisterForm title='Register with your email to be notified when trading begins' />
					<BoxWrapper
					// backgroundColor={"rgba(255,255,255,0.2)"}
					// as={"section"}
					// width='100%'
					// marginTop={"20px !important"}
					>
						<div
						// flex
						// gap='20px'
						// alignItems='flex-start'
						// justifyContent={"space-between"}
						>
							<img src='/sw_icon.svg' alt='Swiper Preview' />
							<Slider autoPlay={true}>
								{SLIDER_MAIN_PAGE.map(
									(item, key): JSX.Element => (
										<Fragment key={`slider_main_page_${key}`}>
											<SliderItem>{item.children}</SliderItem>
										</Fragment>
									)
								)}
							</Slider>
						</div>
					</BoxWrapper>
				</div>
			</DefaultLayout>
		</Fragment>
	);
}

export default App;
