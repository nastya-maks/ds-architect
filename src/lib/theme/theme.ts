import { DefaultTheme } from "styled-components";
import { colors, spacers, typography } from "./tokens/index";

export const lightTheme: DefaultTheme = {
    colors: {
        text: {
            base: {
                primary: colors.neutral[800],
                secondary: colors.neutral[500],
                disabled: colors.disabled[400],
                onLight: colors.neutral[800],
                onDark: colors.neutral[50],
            },
            brand: {
                light: {
                    enabled: colors.indigo[100],
                },
                normal: {
                    enabled: colors.indigo[400],
                    hover: colors.indigo[500],
                    active: colors.indigo[600],
                },
            },
            commerce: {
                light: {
                    enabled: colors.green[100],
                },
                normal: {
                    enabled: colors.green[400],
                },
            },
            success: {
                light: {
                    enabled: colors.green[100],
                },
                normal: {
                    enabled: colors.green[400],
                },
            },
            danger: {
                light: {
                    enabled: colors.red[100],
                },
                normal: {
                    enabled: colors.red[400],
                },
            },
            blue: {
                light: {
                    enabled: colors.blue[100],
                },
                normal: {
                    enabled: colors.blue[400],
                },
            },
            orange: {
                light: {
                    enabled: colors.orange[100],
                },
                normal: {
                    enabled: colors.orange[400],
                },
            },
            pink: {
                light: {
                    enabled: colors.pink[100],
                },
                normal: {
                    enabled: colors.pink[400],
                },
            },
        },
        bg: {
            base: {
                global: colors.indigo[50],
                section: colors.base.white,
                disabled: colors.disabled[100],
                fakeAlpha: colors.whiteAlpha[0],
                overlay: colors.neutralAlpha[80],
            },
            neutral: {
                light: {
                    enabled: colors.neutral[50],
                    hover: colors.neutral[100],
                    active: colors.neutral[200],
                },
                normal: {
                    enabled: colors.neutral[100],
                    hover: colors.neutral[200],
                    active: colors.neutral[300],
                },
            },
            brand: {
                light: {
                    enabled: colors.indigo[50],
                    hover: colors.indigo[100],
                    active: colors.indigo[200],
                },
                normal: {
                    enabled: colors.indigo[400],
                    hover: colors.indigo[500],
                    active: colors.indigo[600],
                },
            },
            commerce: {
                light: {
                    enabled: colors.green[50],
                    hover: colors.green[100],
                    active: colors.green[200],
                },
                normal: {
                    enabled: colors.green[400],
                    hover: colors.green[500],
                    active: colors.green[600],
                },
            },
            success: {
                light: {
                    enabled: colors.green[50],
                    hover: colors.green[100],
                    active: colors.green[200],
                },
                normal: {
                    enabled: colors.green[400],
                    hover: colors.green[500],
                    active: colors.green[600],
                },
            },
            danger: {
                light: {
                    enabled: colors.red[50],
                    hover: colors.red[100],
                    active: colors.red[200],
                },
                normal: {
                    enabled: colors.red[400],
                    hover: colors.red[500],
                    active: colors.red[600],
                },
            },
            blue: {
                light: {
                    enabled: colors.blue[50],
                    hover: colors.blue[100],
                    active: colors.blue[200],
                },
                normal: {
                    enabled: colors.blue[400],
                    hover: colors.blue[500],
                    active: colors.blue[600],
                },
            },
            orange: {
                light: {
                    enabled: colors.orange[50],
                    hover: colors.orange[100],
                    active: colors.orange[200],
                },
                normal: {
                    enabled: colors.orange[400],
                    hover: colors.orange[500],
                    active: colors.orange[600],
                },
            },
            pink: {
                light: {
                    enabled: colors.pink[50],
                    hover: colors.pink[100],
                    active: colors.pink[200],
                },
                normal: {
                    enabled: colors.pink[400],
                    hover: colors.pink[500],
                    active: colors.pink[600],
                },
            },
        },
        border: {
            base: {
                light: colors.neutral[100],
                normal: colors.neutral[200],
                dark: colors.neutral[400],
                onLight: colors.neutral[800],
                onDark: colors.neutral[50],
                fakeAlpha: colors.whiteAlpha[0],
                disabled: colors.disabled[400],
            },
            brand: {
                light: {
                    enabled: colors.indigo[100],
                },
                normal: {
                    enabled: colors.indigo[400],
                    hover: colors.indigo[500],
                    active: colors.indigo[600],
                },
            },
            commerce: {
                light: {
                    enabled: colors.green[100],
                },
                normal: {
                    enabled: colors.green[400],
                },
            },
            success: {
                light: {
                    enabled: colors.green[100],
                },
                normal: {
                    enabled: colors.green[400],
                },
            },
            danger: {
                light: {
                    enabled: colors.red[100],
                },
                normal: {
                    enabled: colors.red[400],
                },
            },
            blue: {
                light: {
                    enabled: colors.blue[100],
                },
                normal: {
                    enabled: colors.blue[400],
                },
            },
            orange: {
                light: {
                    enabled: colors.orange[100],
                },
                normal: {
                    enabled: colors.orange[400],
                },
            },
            pink: {
                light: {
                    enabled: colors.pink[100],
                },
                normal: {
                    enabled: colors.pink[400],
                },
            },
        },
    },
    typography: {
        fontFamily: {
            heading: 'Inter',
            text: 'Inter',
        },
        fontSize: {
            heading: {
                h1: typography.fontSize.h1,
                h2: typography.fontSize.h2,
                h3: typography.fontSize.h3,
                h4: typography.fontSize.h4,
                h5: typography.fontSize.h5,
            },
            text: {
                large: typography.fontSize.textLarge,
                base: typography.fontSize.textBase,
                small: typography.fontSize.textSmall,
            },
            component: {
                base: typography.fontSize.componentBase,
                small: typography.fontSize.componentSmall,
                xSmall: typography.fontSize.componentXSmall,
            },
        },
        lineHeight: {
            heading: {
                h1: typography.lineHeight.h1,
                h2: typography.lineHeight.h2,
                h3: typography.lineHeight.h3,
                h4: typography.lineHeight.h4,
                h5: typography.lineHeight.h5,
            },
            text: {
                large: typography.lineHeight.textLarge,
                base: typography.lineHeight.textBase,
                small: typography.lineHeight.textSmall,
            },
            component: {
                base: typography.lineHeight.componentBase,
                small: typography.lineHeight.componentSmall,
                xSmall: typography.lineHeight.componentXSmall,
            },
        },
        fontWeight: {
            regular: typography.fontWeight.regular,
            semiBold: typography.fontWeight.semiBold,
        }

    },
    spacing: {
        inner: {
            noGap: spacers.none,
            xSmall: spacers[2],
            small: spacers[4],
            medium: spacers[8],
            large: spacers[12],
            xLarge: spacers[16],
        },
        padding: {
            noPadding: spacers.none,
            xSmall: spacers[8],
            small: spacers[12],
            medium: spacers[16],
            large: spacers[24],
            xLarge: spacers[32],
            xxLarge: spacers[48],
        },
        grid: {
            columnGap: spacers[16],
            rowGap: spacers[16],
            columnCount: spacers[12],
        },
        size: {
            xSmall: spacers[8],
            small: spacers[12],
            base: spacers[16],
            large: spacers[20],
            xLarge: spacers[24],
            xxLarge: spacers[32],
            xxxLarge: spacers[40],
            xxxxLarge: spacers[44],
            xxxxxLarge: spacers[48],
            xxxxxxLarge: spacers[104],
            xxxxxxxLarge: spacers[128],
            xxxxxxxxLarge: spacers[256],
        },
    },
    borderRadius: {
        micro: spacers[4],
        componentInner: spacers[8],
        componentBase: spacers[12],
        sectionInner: spacers[20],
        sectionBase: spacers[24],
        rounded: spacers[999],
    },
    focus: {
        base: colors.focusBase,
        commerce: colors.focusCommerce,
    },
    animation: {
        base: `all 0.4s`,
    },
}

export const darkTheme: DefaultTheme = {
    ...lightTheme,
    colors: {
        text: {
            base: {
                primary: colors.neutral[50],
                secondary: colors.neutral[300],
                disabled: colors.disabled[400],
                onLight: colors.neutral[800],
                onDark: colors.neutral[50],
            },
            brand: {
                light: {
                    enabled: colors.indigo[800],
                },
                normal: {
                    enabled: colors.indigo[400],
                    hover: colors.indigo[300],
                    active: colors.indigo[200],
                },
            },
            commerce: {
                light: {
                    enabled: colors.green[800],
                },
                normal: {
                    enabled: colors.green[400],
                },
            },
            success: {
                light: {
                    enabled: colors.green[800],
                },
                normal: {
                    enabled: colors.green[400],
                },
            },
            danger: {
                light: {
                    enabled: colors.red[800],
                },
                normal: {
                    enabled: colors.red[400],
                },
            },
            blue: {
                light: {
                    enabled: colors.blue[800],
                },
                normal: {
                    enabled: colors.blue[400],
                },
            },
            orange: {
                light: {
                    enabled: colors.orange[800],
                },
                normal: {
                    enabled: colors.orange[400],
                },
            },
            pink: {
                light: {
                    enabled: colors.pink[800],
                },
                normal: {
                    enabled: colors.pink[400],
                },
            },
        },
        bg: {
            base: {
                global: colors.neutral[800],
                section: colors.neutral[700],
                disabled: colors.disabled[100],
                fakeAlpha: colors.whiteAlpha[0],
                overlay: colors.neutralAlpha[80],
            },
            neutral: {
                light: {
                    enabled: colors.neutral[900],
                    hover: colors.neutral[800],
                    active: colors.neutral[700],
                },
                normal: {
                    enabled: colors.neutral[800],
                    hover: colors.neutral[700],
                    active: colors.neutral[600],
                },
            },
            brand: {
                light: {
                    enabled: colors.indigo[900],
                    hover: colors.indigo[800],
                    active: colors.indigo[700],
                },
                normal: {
                    enabled: colors.indigo[400],
                    hover: colors.indigo[500],
                    active: colors.indigo[600],
                },
            },
            commerce: {
                light: {
                    enabled: colors.green[800],
                    hover: colors.green[700],
                    active: colors.green[600],
                },
                normal: {
                    enabled: colors.green[400],
                    hover: colors.green[500],
                    active: colors.green[600],
                },
            },
            success: {
                light: {
                    enabled: colors.green[800],
                    hover: colors.green[700],
                    active: colors.green[600],
                },
                normal: {
                    enabled: colors.green[400],
                    hover: colors.green[500],
                    active: colors.green[600],
                },
            },
            danger: {
                light: {
                    enabled: colors.red[800],
                    hover: colors.red[700],
                    active: colors.red[600],
                },
                normal: {
                    enabled: colors.red[400],
                    hover: colors.red[500],
                    active: colors.red[600],
                },
            },
            blue: {
                light: {
                    enabled: colors.blue[800],
                    hover: colors.blue[700],
                    active: colors.blue[600],
                },
                normal: {
                    enabled: colors.blue[400],
                    hover: colors.blue[500],
                    active: colors.blue[600],
                },
            },
            orange: {
                light: {
                    enabled: colors.orange[800],
                    hover: colors.orange[700],
                    active: colors.orange[600],
                },
                normal: {
                    enabled: colors.orange[400],
                    hover: colors.orange[500],
                    active: colors.orange[600],
                },
            },
            pink: {
                light: {
                    enabled: colors.pink[800],
                    hover: colors.pink[700],
                    active: colors.pink[600],
                },
                normal: {
                    enabled: colors.pink[400],
                    hover: colors.pink[500],
                    active: colors.pink[600],
                },
            },
        },
        border: {
            base: {
                light: colors.neutral[700],
                normal: colors.neutral[400],
                dark: colors.neutral[200],
                onLight: colors.neutral[800],
                onDark: colors.neutral[50],
                fakeAlpha: colors.whiteAlpha[0],
                disabled: colors.disabled[400],
            },
            brand: {
                light: {
                    enabled: colors.indigo[800],
                },
                normal: {
                    enabled: colors.indigo[400],
                    hover: colors.indigo[500],
                    active: colors.indigo[600],
                },
            },
            commerce: {
                light: {
                    enabled: colors.green[800],
                },
                normal: {
                    enabled: colors.green[400],
                },
            },
            success: {
                light: {
                    enabled: colors.green[800],
                },
                normal: {
                    enabled: colors.green[400],
                },
            },
            danger: {
                light: {
                    enabled: colors.red[800],
                },
                normal: {
                    enabled: colors.red[400],
                },
            },
            blue: {
                light: {
                    enabled: colors.blue[800],
                },
                normal: {
                    enabled: colors.blue[400],
                },
            },
            orange: {
                light: {
                    enabled: colors.orange[800],
                },
                normal: {
                    enabled: colors.orange[400],
                },
            },
            pink: {
                light: {
                    enabled: colors.pink[800],
                },
                normal: {
                    enabled: colors.pink[400],
                },
            },
        },
    }
}