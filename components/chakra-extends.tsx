import { extendTheme } from "@chakra-ui/react"

const vxtheme = extendTheme({
    colors: {},
    fonts: {},
    fontSizes: {},
    breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
    },
})

export const theme = extendTheme({vxtheme});

