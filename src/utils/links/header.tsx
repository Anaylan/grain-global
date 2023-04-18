import user from "@/assets/svg/user.svg";
import { ReactNode } from "react";

export type HeaderLinkProps = {
	href: string;
	children: ReactNode;
};

export const HEADER_LINKS: HeaderLinkProps[] = [
	{
		href: "/auth/signin",
		children: (
			<>
				<div
				// flex
				// alignItems={"center"}
				// spacing={"12px"}
				>
					<div
					// maxH={"40px"}
					// maxW='40px'
					// width={"40px"}
					// height={"40px"}
					// borderRadius={"full"}
					// alignItems={"center"}
					// display={"flex"}
					// justifyContent={"center"}
					// backgroundColor='white'
					>
						<img
							// maxW={"20px"}
							// maxH='20px'
							src={user}
							alt='User icon'
						/>
					</div>
					<p>Log In</p>
				</div>
			</>
		),
	},
];
