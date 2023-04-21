import { FC, ImgHTMLAttributes } from "react";
import style from "./Image.module.scss";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
	rest?: ImgHTMLAttributes<HTMLImageElement>;
};

export const Image: FC<ImageProps> = ({ className = "", ...rest }) => {
	return <img className={`${style["image"]} ${className}`} {...rest} />;
};
