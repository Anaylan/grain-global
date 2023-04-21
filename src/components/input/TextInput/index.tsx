import { InputHTMLAttributes, FC } from "react";
import style from "./TextInput.module.scss";

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
	rest?: InputHTMLAttributes<HTMLInputElement>;
};

export const TextInput: FC<TextInputProps> = ({ className = "", ...rest }) => {
	return <input className={`${style["text-input"]} ${className}`} {...rest} />;
};
