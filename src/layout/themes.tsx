import {extendTheme} from "@chakra-ui/react";

const theme: Record <string, any> = extendTheme({
    colors: {
        brand: {
            100: "#4806ff",
            200: "#1a202c",
            300: "#20006690",
            400: "#ddddff",
        },
        textcolor: {
            900: "#ffffff",
            800: "#ddddff",
            700: "#ccccff",
            600: "#bbbbff",
            500: "#aaaaff",
            400: "#9999ff",
            300: "#8888ff",
            200: "#7777ff",
            100: "#6666ff",
        }
    },
    sizes: {
        container: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
    },
    components: {
        Text: {
            baseStyle: {
                color: "textcolor.700",
                fontSize: "1rem",
            },
        },
    }
})

export default theme;