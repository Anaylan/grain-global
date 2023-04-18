import { Link } from "@/components/link";
import { HEADER_LINKS, HeaderLinkProps } from "@/utils/links/header";

export const DefaultNavigation = () => {
	return (
		<header
			className='container'
			// zIndex='30'
			// paddingY={"40px"}
			// display={"flex"}
			// justifyContent={"space-between"}
			// as={"header"}
		>
			<div>
				<Link href='/'>
					<img src='/logo.svg' alt='Grain Global' />
				</Link>
			</div>
			<div
			// flex
			>
				{HEADER_LINKS.map(
					(_link: HeaderLinkProps, key: number): JSX.Element => (
						<div key={`header_link_${key}`}>
							<Link href={_link.href}>{_link.children}</Link>
						</div>
					)
				)}
			</div>
		</header>
	);
};
