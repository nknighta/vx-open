import { NextPage } from 'next'
import { AppProps } from 'next/app'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function _App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)

    return getLayout(
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}