import { Fragment, ReactNode } from "react";
import { DefaultFooter } from "./footer/DefaultFooter";
import { DefaultNavigation } from "./navigation/DefaultNavigation";
import bg from "@/assets/bg.webp";
import { DefaultWrapper } from "./wrapper/DefaultWrapper";

export default function DefaultLayout({ children }: { children: ReactNode }) {
	return (
		<Fragment>
			<DefaultNavigation />
			<DefaultWrapper>{children}</DefaultWrapper>
			<DefaultFooter />
			<span
			// position={"absolute"}
			// zIndex='1'
			// width='100vw'
			// height={{ md: "100%", base: "420px" }}
			// _before={{
			// 	content: '""',
			// 	width: "100vw",
			// 	height: { md: "100%", base: "420px" },
			// 	backgroundImage: bg,
			// 	backgroundRepeat: "no-repeat",
			// 	backgroundSize: "cover",
			// 	backgroundPosition: {
			// 		"2xl": "top left",
			// 		xl: "center",
			// 		lg: "center",
			// 		base: "center",
			// 	},
			// 	position: "absolute",
			// }}
			// _after={{
			// 	content: '""',
			// 	width: "100vw",
			// 	height: { md: "0", base: "114px" },
			// 	position: "absolute",
			// 	bottom: "0",
			// 	left: "0",
			// 	background:
			// 		"linear-gradient(180deg, #021524 0%, rgba(2, 21, 36, 0) 100%)",
			// 	transform: "matrix(1, 0, 0, -1, 0, 0)",
			// }}
			/>
		</Fragment>
	);
}
