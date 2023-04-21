import { NavLink } from "@/components/link";
import { HEADER_LINKS, HeaderLinkProps } from "@/utils/links/header";
import style from "./DefaultNavigation.module.scss";
import { Image } from "@/components/Image";
import { FlexBox } from "@/components/boxes";
import { ReactNode } from "react";

export const DefaultNavigation = () => {
	return (
		<header className={"container " + style.header} id='header'>
			<NavLink className='link__ghost' href='/'>
				<Image src='/logo.svg' alt='Grain Global' />
			</NavLink>
			<FlexBox
			// flex
			>
				{HEADER_LINKS.map(
					(_link: HeaderLinkProps, key: number): ReactNode => (
						<div key={`header_link_${key}`}>
							<NavLink className='link__light' href={_link.href}>
								{_link.children}
							</NavLink>
						</div>
					)
				)}
			</FlexBox>
		</header>
	);
};
