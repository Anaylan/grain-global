import { FC, ReactNode } from "react";
import style from "./Item.module.scss";

export type SliderItemProps = {
	children: ReactNode;
};

export const SliderItem: FC<SliderItemProps> = ({ children }) => {
	return (
		<div className={style["slider-item"]}>
			{/* <p
			// noOfLines={2}
			// left={0}
			// top={0}
			// position={"relative"}
			// userSelect={"none"}
			// fontSize={{ sm: "30px", base: "20px" }}
			// lineHeight='126%'
			> */}
			{children}
			{/* </p> */}
		</div>
	);
};
