import { RouterProvider } from "react-router";
import { router } from "./utils/routing/router";
import { Input } from "@/components/input/TextInput";
import { Container } from "./components/container";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	fonts: {
		// -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
		heading: `Lato, Corbel, sans-serif`,
		body: `Lato, Alatsi, sans-serif`,
		mono: `'Lato', sans-serif`,
	},
	styles: {
		global: {
			"html, body": {
				minHeight: "100vh",
				minWidth: "100vw",
				maxWidth: "100vw",
				overflowX: "hidden",
			},
			body: {
				overflow: "hidden",
				color: "white",
				backgroundColor: "#021524",
				position: "relative",
			},
			"#root": {
				minHeight: "100vh",
				display: "flex",
				maxWidth: "100vw",
				width: "100vw",
				flexDirection: "column",
			},
			"#content": {
				flex: "1 1 auto",
				overflowX: "hidden",
			},
			".link.active": {
				color: "#34B829",
				textDecoration: "underline",
			},
			".dot.active": {
				backgroundColor: "#34B829",
			},
		},
	},
	components: {
		Input,
		Container,
	},
});

function App() {
	return (
		<ChakraProvider theme={theme}>
			<RouterProvider router={router} />
		</ChakraProvider>
	);
}

export default App;
