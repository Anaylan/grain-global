import { Link } from "@/components/link";
import { Container, Flex, Text } from "@chakra-ui/react";

export const DefaultFooter = () => {
	return (
		<Container zIndex='30' pt={"6"} mb={"52px"} as={"footer"}>
			<Flex
				marginBottom={{ md: "13px", base: "10" }}
				flexDirection={{ md: "row", base: "column" }}
				alignItems='start'
				gap={"16px"}>
				<Link to='/terms'>Terms and Conditions</Link>
				<Link to='/supply'>Supply agreement</Link>
				<Link to='/commision'>Commission agtreement</Link>
			</Flex>
			<Text
				lineHeight={"110%"}
				fontSize={{ xl: "18px", base: "14px" }}
				fontWeight={700}
				color='#919191'>
				2023 &copy; Grain Global Commercial Brokers LLC
			</Text>
		</Container>
	);
};
