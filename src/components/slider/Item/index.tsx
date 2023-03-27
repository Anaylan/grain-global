import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export const SliderItem = ({ children }: { children: ReactNode }) => {
	return (
		<Box minW={"100%"} maxW={"100%"} height='auto'>
			<Text userSelect={"none"} fontSize='30px' lineHeight='126%'>
				{children}
			</Text>
		</Box>
	);
};
