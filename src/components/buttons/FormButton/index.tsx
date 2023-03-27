import { Button, ButtonProps } from "@chakra-ui/react";
import { FC } from "react";

export const FormButton: FC<ButtonProps> = ({ ...rest }) => {
	return <Button {...rest}>{rest.children}</Button>;
};
