import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(inputAnatomy.keys);

const register = definePartsStyle({
	field: {
		border: "1px solid",
		borderColor: "#919191",
		background: "#FFFFFF",
		borderRadius: "full",
		color: "#34373C",

		// Let's also provide dark mode alternatives
		_dark: {
			borderColor: "gray.600",
			background: "gray.800",
		},
	},
	addon: {
		border: "1px solid",
		borderColor: "#919191",
		background: "#FFFFFF",
		borderRadius: "full",
		color: "#34373C",

		_dark: {
			borderColor: "gray.600",
			background: "gray.600",
			color: "gray.400",
		},
	},
});

const baseStyle = definePartsStyle({
	// define the part you're going to style
	field: {
		borderRadius: "8px !important",
	},
	addon: {
		borderRadius: "8px !important",
	},
	element: {
		borderRadius: "8px !important",
	},
});

export const Input = defineMultiStyleConfig({
	baseStyle,
	variants: { register },
});
