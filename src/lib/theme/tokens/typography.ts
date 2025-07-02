import { spacers } from "./spacers";

export const typography = {
	fontFamily: {
		base: `"Open Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
		heading: `"Open Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
		monospace: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
	},

	fontSize: {
		h1: spacers[36],
		h2: spacers[28],
		h3: spacers[24],
		h4: spacers[20],
		h5: spacers[16],
		textLarge: spacers[20],
		textBase: spacers[16],
		textSmall: spacers[14],
		componentBase: spacers[16],
		componentSmall: spacers[14],
		componentXSmall: spacers[12],
	},

	lineHeight: {
		h1: spacers[40],
		h2: spacers[32],
		h3: spacers[28],
		h4: spacers[24],
		h5: spacers[20],
		textLarge: spacers[28],
		textBase: spacers[24],
		textSmall: spacers[20],
		componentBase: spacers[24],
		componentSmall: spacers[20],
		componentXSmall: spacers[16],
	},

	fontWeight: {
		regular: "400",
		semiBold: "600",
	},
};
