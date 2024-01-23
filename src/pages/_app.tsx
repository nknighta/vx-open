import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import './global.css';

// fixed Generic type 'AppProps<P, IP, C>' requires 3 type argument(s).
type AppPropsWithLayout = AppProps & {
    Component: NextPage & {
        getLayout?: (page: ReactElement) => ReactNode;
    };
};

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
            fontFamily: '"Noto Sans JP", sans-serif'
        }}>
            <Component {...pageProps} />
        </div>,
    );
}
