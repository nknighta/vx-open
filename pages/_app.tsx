import "./global.css";
import {ReactElement, ReactNode} from "react";
import {NextPage} from "next";
import type {AppProps} from "next/app";
import {ChakraProvider} from "@chakra-ui/react";
import {WagmiConfig} from "wagmi";
import {config} from "../scripts/metamaskConfig";
import {extendTheme} from "@chakra-ui/react";
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
            <ChakraProvider >
                <script src="http://localhost:8097"></script>
                {children}
            </ChakraProvider>
        </WagmiConfig>
    )
}