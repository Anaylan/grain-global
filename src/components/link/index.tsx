import { Button, ButtonProps } from "@chakra-ui/react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface LinkProps extends ButtonProps {
	to: string;
	rest?: ButtonProps;
}

export const Link: FC<LinkProps> = ({ to, ...rest }) => {
	return (
		<Button
			className='link'
			variant={"link"}
			fontWeight={700}
			marginInline={0}
			_hover={{
				textDecoration: "underline",
				cursor: "poiner",
			}}
			fontSize={{ "2xl": "18px", md: "14px", base: "22px" }}
			color='#EEFAF8'
			lineHeight={"110%"}
			as={NavLink}
			// caseSensitive={true}
			{...rest}
			to={to}>
			{rest.children}
		</Button>
	);
};
