import { FC, ReactNode } from "react";

export type SliderItemProps = {
	children: ReactNode;
};

export const SliderItem: FC<SliderItemProps> = ({ children }) => {
	return (
		<div
		//  minW={"100%"}
		//  maxW={"100%"}
		//  height='auto'
		>
			<p
			// noOfLines={2}
			// left={0}
			// top={0}
			// position={"relative"}
			// userSelect={"none"}
			// fontSize={{ sm: "30px", base: "20px" }}
			// lineHeight='126%'
			>
				{children}
			</p>
		</div>
	);
};
