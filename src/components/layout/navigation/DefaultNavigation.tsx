import { Container, Image, Box, Flex, HStack, Text } from "@chakra-ui/react";

import { Link } from "@/components/link";
import user from "@/assets/svg/user.svg";
export const DefaultNavigation = () => {
	return (
		<Container
			zIndex='30'
			paddingY={"40px"}
			display={"flex"}
			justifyContent={"space-between"}
			as={"header"}>
			<Box>
				<Link to='/'>
					<Image src='/logo.svg' alt='Grain Global' />
				</Link>
			</Box>
			<Flex>
				<Box>
					<Link to={"/auth/signin"}>
						<HStack alignItems={"center"} spacing={"12px"}>
							<Box
								maxH={"40px"}
								maxW='40px'
								width={"40px"}
								height={"40px"}
								borderRadius={"full"}
								alignItems={"center"}
								display={"flex"}
								justifyContent={"center"}
								backgroundColor='white'>
								<Image
									maxW={"20px"}
									maxH='20px'
									src={user}
									alt='Grain Global'
								/>
							</Box>
							<Text>Log In</Text>
						</HStack>
					</Link>
				</Box>
			</Flex>
		</Container>
	);
};
