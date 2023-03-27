import { BoxWrapper } from "@/components/boxes";
import { PreRegisterForm } from "@/components/forms/PreRegister";
import { SliderItem } from "@/components/slider/Item";
import { Slider } from "@/components/slider/Wrapper";
import { Image, Heading, VStack } from "@chakra-ui/react";
import { Fragment } from "react";

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
						Рre-registration
					</Heading>
				</VStack>
				<PreRegisterForm />
				<BoxWrapper
					as={"section"}
					width='100%'
					display={"flex"}
					marginTop={"20px !important"}
					gap='20px'
					alignItems='flex-start'
					justifyContent={"space-between"}>
					<Image src='/sw_icon.svg' alt='Swiper Preview' />
					<Slider autoPlay={true}>
						<SliderItem>
							Sell on new markets.
							<br />
							Buy from new suppliers
						</SliderItem>
						<SliderItem>
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
						</SliderItem>
					</Slider>
				</BoxWrapper>
			</VStack>
		</Fragment>
	);
}
