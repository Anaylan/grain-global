import {
	SliderContext,
	SliderContextType,
} from "@/utils/context/SliderContext";
import { Box } from "@chakra-ui/react";
import { FC, useContext } from "react";

export type DotProps = {
	index: number;
};

export const Dot: FC<DotProps> = ({ index }) => {
	const { goToSlide, activeSlide } = useContext(
		SliderContext
	) as SliderContextType;
	return (
		<Box
			_hover={{
				background: "#F2A905",
			}}
			_active={{
				background: "#34B829",
			}}
			onClick={() => goToSlide(index)}
			transition='0.2s ease-in-out'
			background='#D9D9D9'
			borderRadius='2px'
			width={"16px"}
			height={"4px"}
			className={`dot${index === activeSlide ? " active" : ""}`}
		/>
	);
};
