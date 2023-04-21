import { Fragment, ReactNode } from "react";
import { DefaultFooter } from "./footer/DefaultFooter";
import { DefaultNavigation } from "./navigation/DefaultNavigation";
import { DefaultWrapper } from "./wrapper/DefaultWrapper";

export default function DefaultLayout({ children }: { children: ReactNode }) {
	return (
		<Fragment>
			<DefaultNavigation />
			<DefaultWrapper>{children}</DefaultWrapper>
			<DefaultFooter />
			<span className='bg' />
		</Fragment>
	);
}
