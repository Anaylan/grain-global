import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import style from "./FormButton.module.scss";

export type FormButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	rest?: ButtonHTMLAttributes<HTMLButtonElement>;
};

export const Button: FC<FormButtonProps> = ({
	children,
	className = "",
	...rest
}) => {
	return (
		<button
			className={`${style["btn"]} ${style["btn__green"]} ${className}`}
			{...rest}>
			{children}
		</button>
	);
};
