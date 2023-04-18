// import { Button, ButtonProps } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

export type FormButtonProps = {
	children: ReactNode;
	rest?: any;
};

export const FormButton: FC<FormButtonProps> = ({ children, ...rest }) => {
	return <button {...rest}>{children}</button>;
};
