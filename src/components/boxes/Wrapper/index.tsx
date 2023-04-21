import { FC, HTMLAttributes } from "react";
import style from "./BoxWrapper.module.scss";

export type BoxWrapperProps = HTMLAttributes<HTMLDivElement> & {
	props?: HTMLAttributes<HTMLDivElement>;
};

export const BoxWrapper: FC<BoxWrapperProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<div
			// borderRadius={"xl"}
			// padding='30px'
			// backgroundColor='rgba(255,255,255,0.3)'
			className={`${style["box-wrapper"]} ${className}`}
			{...props}>
			{children}
		</div>
	);
};
