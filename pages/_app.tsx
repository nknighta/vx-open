import React from "react";
import { AppProps } from "next/app";
import "./global.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../components/chakra-extends";
import { MediaProvider } from "../multiLayout/MediaProvider";

export default function App({ Component, ...pageProps }: AppProps) {
    return (
        <MediaProvider>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </MediaProvider>
    )
}