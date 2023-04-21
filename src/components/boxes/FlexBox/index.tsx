import { FC, HTMLAttributes, ReactNode } from "react";
import style from "./FlexBox.module.scss";

export type FlexBoxProps = HTMLAttributes<HTMLDivElement> & {
	rest?: HTMLAttributes<HTMLDivElement>;
};

export const FlexBox: FC<FlexBoxProps> = ({
	children,
	className = "",
	...rest
}) => {
	return (
		<div className={`${style["flexbox"]} ${className}`} {...rest}>
			{children}
		</div>
	);
};
