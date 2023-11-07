import "./global.css";
import {ReactElement, ReactNode, useState, useEffect} from "react";
import {NextPage} from "next";
import type {AppProps} from "next/app";
import {Analytics} from '@vercel/analytics/react';
import {ChakraProvider} from "@chakra-ui/react";
import {WagmiConfig} from "wagmi";
import {config} from "../scripts/metamaskConfig";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({Component, pageProps}: AppPropsWithLayout) {

    const getLayout =
        Component.getLayout ||
        ((page) => {
            return page;
        });

    return getLayout(
        <Provider>
            <Component {...pageProps} />
        </Provider>
    );
}

const Provider = ({children}: any) => {
    return (
        <WagmiConfig config={config}>
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </WagmiConfig>
    )
}