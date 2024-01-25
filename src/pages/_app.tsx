import { ReactElement, ReactNode, useEffect } from 'react';
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
        <Providers>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-18XMLEQQ2G"></script>
            <script>
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '18XMLEQQ2', {
            page_path: window.location.pathname,
          });
        `}
            </script>
            <Component {...pageProps} />
        </Providers>
    );
}
