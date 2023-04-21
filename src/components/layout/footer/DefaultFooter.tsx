import { FlexBox } from "@/components/boxes";
import { NavLink } from "@/components/link";

import style from "./DefaultFooter.module.scss";

export const DefaultFooter = () => {
	return (
		<footer
			className={`${style["footer"]} container`}
			id='footer'
			// zIndex='30'
			// flex={"auto"}
			// pt={"6"}
			// mb='2'
		>
			<FlexBox
				className={`${style["footer__links"]} ${style["footer__flex"]} column-md`}
				// flex
				// marginBottom={{ md: "13px", base: "10" }}
				// flexDirection={{ md: "row", base: "column" }}
				// alignItems='start'
				// gap={"16px"}
			>
				<NavLink className='link__light' href='/terms'>
					Terms and Conditions
				</NavLink>
				<NavLink className='link__light' href='/supply'>
					Supply agreement
				</NavLink>
				<NavLink className='link__light' href='/commision'>
					Commission agtreement
				</NavLink>
			</FlexBox>
			<p
			// lineHeight={"110%"}
			// fontSize={{ xl: "18px", base: "14px" }}
			// fontWeight={700}
			// color='#919191'
			>
				2023 &copy; Grain Global Commercial Brokers LLC
			</p>
		</footer>
	);
};
