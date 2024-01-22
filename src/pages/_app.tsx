import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import './global.css';
import Providers from 'components/provider';

// fixed Generic type 'AppProps<P, IP, C>' requires 3 type argument(s).
type AppPropsWithLayout = AppProps & {
    Component: NextPage & {
        getLayout?: (page: ReactElement) => ReactNode;
    };
};

// <Providers> is for react-query and wagmi sh
// import from 'components/provider'
export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout =
        Component.getLayout ||
        ((page) => {
            return page;
        });
    return getLayout(
        <div style={{
            margin: 0,
            padding: 0,
            fontFamily: '"Noto Sans JP", sans-serif',
        }}>
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap"
                rel="stylesheet"></link>
            <Providers>
                <Component {...pageProps} />
            </Providers>
        </div>,
    );
}
