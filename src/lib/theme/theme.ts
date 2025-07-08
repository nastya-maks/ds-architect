import { DefaultTheme } from "styled-components";
import { colors } from "./tokens/index";

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
    }
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