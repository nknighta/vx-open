import {ReactElement, ReactNode, useEffect} from 'react';
import {NextPage} from 'next';
import type {AppProps} from 'next/app';
import './global.css';
import {SessionProvider} from "next-auth/react";

type AppPropsWithLayout = AppProps & {
    Component: NextPage & {
        getLayout?: (page: ReactElement) => ReactNode;
    };
};

// <Providers> is for react-query and wagmi sh
// import from 'components/provider'
export default function App({Component, pageProps: {session, ...pageProps}}: AppPropsWithLayout) {
    return (
        <SessionProvider session={session}>
                {process.env.NODE_ENV == "development" ? (<script src="http://localhost:8097"></script>): null}
            <div style={{
                margin: 0,
                padding: 0,
                fontFamily: '"Noto Sans JP", sans-serif'
            }}>
                <Component {...pageProps} />
            </div>
        </SessionProvider>
    );
}
