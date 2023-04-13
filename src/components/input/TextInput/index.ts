import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(inputAnatomy.keys);

const register = definePartsStyle({
	field: {
		borderWidth: "1px",
		fontWeight: "700",
		borderColor: "#919191",
		size: "lg",
		fontSize: { md: "18px", base: "14px" },
	},
	addon: {
		border: "1px solid",
		borderColor: "#919191",
		background: "#FFFFFF",
		borderRadius: "full",
		color: "#34373C",
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
