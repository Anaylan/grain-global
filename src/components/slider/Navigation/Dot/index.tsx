import { FC } from "react";
import style from "./Dot.module.scss";

export type DotProps = {
	index: number;
	goToSlide: (number: number) => void;
	activeSlide: number;
};

export const Dot: FC<DotProps> = ({ index, activeSlide, goToSlide }) => {
	return (
		<div
			onClick={() => goToSlide(index)}
			className={`${style["dot"]} ${
				index === activeSlide ? style["active"] : ""
			}`}
		/>
	);
};
