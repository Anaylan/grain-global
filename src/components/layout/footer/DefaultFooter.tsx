import { Link } from "@/components/link";

export const DefaultFooter = () => {
	return (
		<footer
			className='container'
			// zIndex='30'
			// flex={"auto"}
			// pt={"6"}
			// mb='2'
		>
			<div
			// flex
			// marginBottom={{ md: "13px", base: "10" }}
			// flexDirection={{ md: "row", base: "column" }}
			// alignItems='start'
			// gap={"16px"}
			>
				<Link href='/terms'>Terms and Conditions</Link>
				<Link href='/supply'>Supply agreement</Link>
				<Link href='/commision'>Commission agtreement</Link>
			</div>
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
