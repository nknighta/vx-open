import React, {useState, useEffect} from 'react';
import { WagmiConfig } from 'wagmi';
import { config } from 'scripts/metamaskConfig';
import { ChakraProvider } from '@chakra-ui/react';
import VARIUSHeader from '../components/header';
import Footer from '../components/footer';
import theme from './themes';
import { Text } from '@chakra-ui/react';

const WebAnimated = () => {
    
    return (
        <div>
            <h1>WebAnimated</h1>        
        </div>
    );
};

const WebToggle = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    toggle ? '#000' : '#fff';
    return (
        <div>
            <h1>WebToggle</h1>
            <button onClick={() => {
                setToggle(!toggle);
            }}
            style={{
                background: toggle ? '#000' : '#fff',
                color: toggle ? '#fff' : '#000',
                border: '1px solid #000',
                borderRadius: '5px',
                padding: '5px'
            }}
            >
                <div>
                    {toggle ? 'ON' : 'OFF'}
                </div>
            </button>
        </div>
    );
};

const TestLayout = ({ children }) => {
    return (
        <div style={{
            background: 'linear-gradient(180deg, #000011 30%,#200042 70%, #3406ff 100%)',
            height: '100vh',
            width: '100%',
            position: 'absolute',
        }}>
            <ChakraProvider theme={theme}>
                <VARIUSHeader />
                <WebAnimated/>
                <WebToggle />
                <WagmiConfig config={config}>{children}</WagmiConfig>
                <footer>
                    <Footer />
                </footer>
            </ChakraProvider>
        </div>

    );
};

export default TestLayout;