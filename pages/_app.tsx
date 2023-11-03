import "./global.css";
import {ReactElement, ReactNode, useState, useEffect} from "react";
import {NextPage} from "next";
import type {AppProps} from "next/app";
import {Analytics} from '@vercel/analytics/react';
import {ChakraProvider} from "@chakra-ui/react";

import {WagmiConfig, createConfig, mainnet} from 'wagmi'
import {createPublicClient, http} from 'viem'

const config = createConfig({
    autoConnect: true,
    publicClient: createPublicClient({
        chain: mainnet,
        transport: http()
    }),
})


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
        <ChakraProvider>
            <WagmiConfig config={config}>
                <Analytics/>
                <Component {...pageProps} />
            </WagmiConfig>
        </ChakraProvider>
    );
}