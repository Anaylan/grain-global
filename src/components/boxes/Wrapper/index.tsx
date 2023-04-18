import { FC, ReactNode } from "react";

export type BoxWrapperProps = {
	children?: ReactNode;
	props?: any;
};

export const BoxWrapper: FC<BoxWrapperProps> = ({ children, ...props }) => {
	return (
		<div
			// borderRadius={"xl"}
			// padding='30px'
			// backgroundColor='rgba(255,255,255,0.3)'
			className='box-wrapper'
			{...props}>
			{children}
		</div>
	);
};
