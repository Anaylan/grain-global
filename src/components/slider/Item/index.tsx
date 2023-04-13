import { Box, Text, TextProps } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

export type SliderItemProps = {
	children: ReactNode;
	text?: TextProps;
};

export const SliderItem: FC<SliderItemProps> = ({ children, text }) => {
	return (
		<Box minW={"100%"} maxW={"100%"} height='auto'>
			<Text
				userSelect={"none"}
				fontSize={{ sm: "30px", base: "20px" }}
				{...text}
				lineHeight='126%'>
				{children}
			</Text>
		</Box>
	);
};
