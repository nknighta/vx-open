import React from 'react';
import { WagmiConfig } from 'wagmi';
import { config } from 'scripts/metamaskConfig';
import { ChakraProvider } from '@chakra-ui/react';
import VARIUSHeader from '../components/header';
import Footer from '../layout/footer';

const DocsLayout = ({ children }) => {
    return (
        <div
            style={{
                background: '#000012',
                margin: '0 auto',
            }}>
            <ChakraProvider >
                <VARIUSHeader />
                <WagmiConfig config={config}>{children}</WagmiConfig>
                <Footer />
            </ChakraProvider>
        </div>
    );
};

export default DocsLayout;
