import { FC } from "react";

export type SlideListProps = {
	activeSlide: number;
	children: JSX.Element[];
};

export const SlideList: FC<SlideListProps> = ({ children, activeSlide }) => {
	return (
		<div
			// flex
			className='slider-wrapper'
			// style={{
			// 	transform: `translateX(-${activeSlide * 100}%)`,
			// 	transitionDuration: ".5s",
			// }}
			// flexDirection={"row"}
			// paddingBottom='23px'
		>
			{children}
		</div>
	);
};
