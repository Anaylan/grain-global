import { Container, Image } from "@chakra-ui/react";

import { Link } from "react-router-dom";

export const DefaultNavigation = () => {
	return (
		<Container zIndex='30' paddingY={"40px"} as={"header"}>
			<Link to='/'>
				<Image src='/logo.svg' alt='Grain Global' />
			</Link>
		</Container>
	);
};
