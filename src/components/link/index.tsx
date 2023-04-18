import { FC, ReactNode } from "react";

interface LinkProps {
	href: string;
	children: ReactNode;
	rest?: any;
}

export const Link: FC<LinkProps> = ({ href, children, ...rest }) => {
	return (
		<a
			className='link'
			// variant={"link"}
			// fontWeight={700}
			// marginInline={0}
			// _hover={{
			// 	textDecoration: "underline",
			// 	cursor: "poiner",
			// }}
			// fontSize={{ "2xl": "18px", md: "14px", base: "22px" }}
			// color='#EEFAF8'
			// lineHeight={"110%"}
			// as={"a"}
			// caseSensitive={true}
			{...rest}
			href={href}>
			{children}
		</a>
	);
};
