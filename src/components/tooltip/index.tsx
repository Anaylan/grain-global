import { ReactNode, FC, HTMLAttributes } from "react";
import style from "./Tooltip.module.scss";

export type TooltipProps = {
	label?: string;
	children?: ReactNode;
	className?: string;
	props?: HTMLAttributes<HTMLDivElement>;
};

export const Tooltip: FC<TooltipProps> = ({
	children,
	label,
	className,
	props,
}) => {
	return (
		<div className={`${style["tooltip-wrapper"]} ${className}`} {...props}>
			{children}
			<span className={`${style["tooltip"]}`}>{label}</span>
		</div>
	);
};
