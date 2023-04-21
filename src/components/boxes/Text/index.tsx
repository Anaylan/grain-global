import { FC, ReactNode } from "react";
import style from "./Text.module.scss";

export type TextProps = {
	children: ReactNode;
};

export const Text: FC<TextProps> = ({ children }) => {
	return <p className={style["text"]}>index</p>;
};
