import {
	SliderContext,
	SliderContextType,
} from "@/utils/context/SliderContext";
import { Flex } from "@chakra-ui/react";
import { useContext } from "react";

export const SlideList = () => {
	const { childs, activeSlide } = useContext(
		SliderContext
	) as SliderContextType;

	return (
		<Flex
			className='slider-wrapper'
			style={{
				transform: `translateX(-${activeSlide * 100}%)`,
				transitionDuration: ".5s",
			}}
			flexDirection={"row"}
			paddingBottom='23px'>
			{childs}
		</Flex>
	);
};
