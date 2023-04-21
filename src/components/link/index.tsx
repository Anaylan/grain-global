import { AnchorHTMLAttributes, FC, ReactNode } from "react";
import style from "./Link.module.scss";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	href: string;
	children?: ReactNode;
	rest?: AnchorHTMLAttributes<HTMLAnchorElement>;
};

export const NavLink: FC<LinkProps> = ({
	href,
	children,
	className = "",
	...rest
}) => {
	return (
		<a className={`${style["link"]} ${className}`} href={href} {...rest}>
			{children}
		</a>
	);
};
