import { ReactElement, ReactNode, useEffect } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import './global.css';
import Providers from 'components/provider';
import * as gtag from 'scripts/gtag';
import { useRouter } from 'next/router'
import Script from 'next/script';
// fixed Generic type 'AppProps<P, IP, C>' requires 3 type argument(s).
type AppPropsWithLayout = AppProps & {
    Component: NextPage & {
        getLayout?: (page: ReactElement) => ReactNode;
    };
};

// <Providers> is for react-query and wagmi sh
// import from 'components/provider'
export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const router = useRouter();

    const getLayout =
        Component.getLayout ||
        ((page) => {
            return page;
        });

    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [])
    return getLayout(
<<<<<<< HEAD
        <div style={{
            margin: 0,
            padding: 0,
            fontFamily: '"Noto Sans JP", sans-serif'
        }}>
=======
        <Providers>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-18XMLEQQ2G"></Script>
            <Script id="gtag" defer dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());`
            }}></Script>
>>>>>>> f4b2ab98c30e945b901e64c54ad124aa5e9b9353
            <Component {...pageProps} />
        </div>,
        </Providers>
    );
}
