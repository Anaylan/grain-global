import user from "@/assets/svg/user.svg";
import { ReactNode } from "react";
import { Image } from "@/components/Image";
export type HeaderLinkProps = {
	href: string;
	children: ReactNode;
};

export const HEADER_LINKS: HeaderLinkProps[] = [
	{
		href: "/auth/signin",
		children: (
			<>
				<>
					<Image
						className='img__circle img__white'
						src={user}
						alt='User icon'
					/>
					<p className='link__p'>Log In</p>
				</>
			</>
		),
	},
];
