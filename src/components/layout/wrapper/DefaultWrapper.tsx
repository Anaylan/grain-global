import React, { ReactNode } from "react";

export const DefaultWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<main
			className='container'
			// container
			// zIndex='30'
			// display={"flex"}
			// marginTop={{ md: "0", base: "110px" }}
			// alignItems='center'
			// as={"main"}
			// flex='1 1 auto'
			id='content'>
			{children}
		</main>
	);
};
