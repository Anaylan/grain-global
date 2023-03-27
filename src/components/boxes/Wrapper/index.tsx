import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";

export const BoxWrapper: FC<BoxProps> = ({ ...props }) => {
	return (
		<Box
			borderRadius={"xl"}
			padding='30px'
			{...props}
			backgroundColor='rgba(255,255,255,0.3)'>
			{props.children}
		</Box>
	);
};
