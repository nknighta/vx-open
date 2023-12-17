import React from 'react';
import { WagmiConfig } from 'wagmi';
import { config } from 'scripts/metamaskConfig';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import VARIUSHeader from '../components/header';
import Footer from '../layout/footer';
const breakpoints = {
    base: '0em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
}
const theme = extendTheme({
    colors: {
        brand: {
            100: "#f7fafc",
            // ...
            900: "#1a202c",
        },
    }
})


const Layout = ({ children }) => {
    return (
        <div
            style={{
                background: '#000012',
            }}>
            <ChakraProvider theme={theme}>
                <VARIUSHeader />
                <WagmiConfig config={config}>{children}</WagmiConfig>
                <footer>
                    <Footer />
                </footer>
            </ChakraProvider>
        </div>
    );
};

export default Layout;
