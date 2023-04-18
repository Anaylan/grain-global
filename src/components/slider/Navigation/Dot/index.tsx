import { FC } from "react";

export type DotProps = {
	index: number;
	goToSlide: (number: number) => void;
	activeSlide: number;
};

export const Dot: FC<DotProps> = ({ index, activeSlide, goToSlide }) => {
	return (
		<div
			// _hover={{
			// 	background: "#F2A905",
			// }}
			// _active={{
			// 	background: "#34B829",
			// }}
			onClick={() => goToSlide(index)}
			// transition='0.2s ease-in-out'
			// background='#D9D9D9'
			// borderRadius='2px'
			// width={"16px"}
			// height={"4px"}
			className={`dot${index === activeSlide ? " active" : ""}`}
		/>
	);
};
