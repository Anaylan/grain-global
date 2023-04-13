import { BoxWrapper } from "@/components/boxes";
import { PreRegisterForm } from "@/components/forms/PreRegister";
import { SliderItem } from "@/components/slider/Item";
import { Slider } from "@/components/slider/Wrapper";
import { Image, Heading, VStack, Flex } from "@chakra-ui/react";
import { Fragment } from "react";
import type { SliderItemProps } from "@/components/slider/Item";

const SLIDER_MAIN_PAGE: SliderItemProps[] = [
	{
		children: <>Legally significant deal-negotiations in online meeting room</>,
	},
	{
		children: (
			<>
				Full execution of deals
				<br />
				from start to finish
			</>
		),
	},
	{
		children: (
			<>
				Many thoughtful tools
				<br />
				for user’s convenience
			</>
		),
	},
	{
		children: (
			<>
				Create a new
				<br />
				partnerships easy
			</>
		),
	},
	// {
	// 	children: <>Effortlessly establish new business partnerships</>,
	// },
];

export default function HomePage() {
	return (
		<Fragment>
			<VStack
				alignItems={"flex-start"}
				maxW={{ "2xl": "645px", md: "483px", base: "100%" }}
				spacing={0}>
				<VStack spacing={"4"} alignItems='flex-start'>
					<Heading
						fontWeight='700'
						fontSize={{ "2xl": "56px", base: "36px" }}
						letterSpacing={"-0.01em"}
						fontStyle='normal'
						lineHeight='120%'>
						Food and feed worldwide online trading platform
					</Heading>
					<Heading
						lineHeight={"120%"}
						fontWeight='600'
						letterSpacing='-0.01em'
						fontSize={{ xl: "32px", base: "24px" }}>
						Pre-registration
					</Heading>
				</VStack>
				<PreRegisterForm title='Register with your email to be notified when trading begins' />
				<BoxWrapper as={"section"} width='100%' marginTop={"20px !important"}>
					<Flex
						gap='20px'
						alignItems='flex-start'
						justifyContent={"space-between"}>
						<Image src='/sw_icon.svg' alt='Swiper Preview' />
						<Slider autoPlay={true}>
							{SLIDER_MAIN_PAGE.map((item, key) => (
								<Fragment key={`slider_main_page_${key}`}>
									<SliderItem>{item.children}</SliderItem>
								</Fragment>
							))}
						</Slider>
					</Flex>
				</BoxWrapper>
				{/* <SliderItem>
							Full execution of deals
							<br />
							from start to finish
						</SliderItem>
						<SliderItem>
							Many thoughtful tools
							<br />
							for user’s convenience
						</SliderItem>
						<SliderItem>
							Create a new
							<br />
							partnerships easy
						</SliderItem> */}
			</VStack>
		</Fragment>
	);
}
