import { FC } from "react";
import style from "./SlideList.module.scss";

export type SlideListProps = {
	activeSlide: number;
	children: JSX.Element[];
};

export const SlideList: FC<SlideListProps> = ({ children, activeSlide }) => {
	return (
		<div
			className={style["slider-wrapper"]}
			// TODO: Move this style section in class
			style={{
				transform: `translateX(-${activeSlide * 100}%)`,
			}}>
			{children}
		</div>
	);
};
