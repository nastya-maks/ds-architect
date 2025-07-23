import { StringifyOptions } from "querystring";
import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            text: {
                base: {
                    primary: string,
                    secondary: string,
                    disabled: string,
                    onLight: string,
                    onDark: string,
                },
                brand: {
                    light: {
                        enabled: string,
                    },
                    normal: {
                        enabled: string,
                        hover: string,
                        active: string,
                    },
                },
                commerce: {
                    light: {
                        enabled: string,
                    },
                    normal: {
                        enabled: string,
                    },
                },
                success: {
                    light: {
                        enabled: string,
                    },
                    normal: {
                        enabled: string,
                    },
                },
                danger: {
                    light: {
                        enabled: string,
                    },
                    normal: {
                        enabled: string,
                    },
                },
                blue: {
                    light: {
                        enabled: string,
                    },
                    normal: {
                        enabled: string,
                    },
                },
                orange: {
                    light: {
                        enabled: string,
                    },
                    normal: {
                        enabled: string,
                    },
                },
                pink: {
                    light: {
                        enabled: string,
                    },
                    normal: {
                        enabled: string,
                    },
                },
            },
            bg: {
                base: {
                    global: string,
                    section: string,
                    disabled: string,
                    fakeAlpha: string,
                    overlay: string,
                },
                neutral: {
                    light: {
                        enabled: string,
                        hover: string,
                        active: string,
                    },
                    normal: {
                        enabled: string,
                        hover: string,
                        active: string,
                    },
                },
                brand: {
                    light: {
                        enabled: string,
                        hover: string,
                        active: string,
                    },
                    normal: {
                        enabled: string,
                        hover: string,
                        active: string,
                    },
                },
                commerce: {
                    light: {
                        enabled: string,
                        hover: string,
                        active: string,
                    },
                    normal: {
                        enabled: string,
                        hover: string,
                        active: string,
                    },
                },
                success: {
                    light: {
                        enabled: string,
                        hover: string,
                        active: string,
                    },
                    normal: {
                        enabled: string,
                        hover: string,
                        active: string,
                    },
                },
                danger: {
                    light: {
                        enabled: string,
                        hover: string,
                        active: string,
                    },
                    normal: {
                        enabled: string,
                        hover: string,
                        active: string,
                    },
                },
                blue: {
                    light: {
                        enabled: string,
                        hover: string,
                        active: string,
                    },
                    normal: {
                        enabled: string,
                        hover: string,
                        active: string,
                    },
                },
                orange: {
                    light: {
                        enabled: string,
                        hover: string,
                        active: string,
                    },
                    normal: {
                        enabled: string,
                        hover: string,
                        active: string,
                    },
                },
                pink: {
                    light: {
                        enabled: string,
                        hover: string,
                        active: string,
                    },
                    normal: {
                        enabled: string,
                        hover: string,
                        active: string,
                    },
                },
            },
            border: {
                base: {
                    light: string,
                    normal: string,
                    dark: string,
                    onLight: string,
                    onDark: string,
                    fakeAlpha: string,
                    disabled: string,
                },
                brand: {
                    light: {
                        enabled: string,
                    },
                    normal: {
                        enabled: string,
                        hover: string,
                        active: string,
                    },
                },
                commerce: {
                    light: {
                        enabled: string,
                    },
                    normal: {
                        enabled: string,
                    },
                },
                success: {
                    light: {
                        enabled: string,
                    },
                    normal: {
                        enabled: string,
                    },
                },
                danger: {
                    light: {
                        enabled: string,
                    },
                    normal: {
                        enabled: string,
                    },
                },
                blue: {
                    light: {
                        enabled: string,
                    },
                    normal: {
                        enabled: string,
                    },
                },
                orange: {
                    light: {
                        enabled: string,
                    },
                    normal: {
                        enabled: string,
                    },
                },
                pink: {
                    light: {
                        enabled: string,
                    },
                    normal: {
                        enabled: string,
                    },
                },
            },
        },
        typography: {
            fontFamily: {
                heading: string,
                text: string,
            },
            fontSize: {
                heading: {
                    h1: string,
                    h2: string,
                    h3: string,
                    h4: string,
                    h5: string,
                },
                text: {
                    large: string,
                    base: string,
                    small: string,
                },
                component: {
                    base: string,
                    small: string,
                    xSmall: string,
                },
            },
            lineHeight: {
                heading: {
                    h1: string,
                    h2: string,
                    h3: string,
                    h4: string,
                    h5: string,
                },
                text: {
                    large: string,
                    base: string,
                    small: string,
                },
                component: {
                    base: string,
                    small: string,
                    xSmall: string,
                },
            },
            fontWeight: {
                regular: string,
                semiBold: string,
            },
        },
        spacing: {
            inner: {
                noGap: string,
                xSmall: string,
                small: string,
                medium: string,
                large: string,
                xLarge: string,
            },
            padding: {
                noPadding: string,
                xSmall: string,
                small: string,
                medium: string,
                large: string,
                xLarge: string,
                xxLarge: string,
            },
            grid: {
                columnGap: string,
                rowGap: string,
                columnCount: string,
            },
            size: {
                xSmall: string,
                small: string,
                base: string,
                large: string,
                xLarge: string,
                xxLarge: string,
                xxxLarge: string,
                xxxxLarge: string,
                xxxxxLarge: string,
                xxxxxxLarge: string,
                xxxxxxxLarge: string,
                xxxxxxxxLarge: string,
            },
        },
        borderRadius: {
            micro: string,
            componentInner: string,
            componentBase: string,
            sectionInner: string,
            sectionBase: string,
            rounded: string,
        },
    }
}