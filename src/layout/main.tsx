import React from 'react';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import VARIUSHeader from '../components/header';
import Footer from '../components/footer';
import theme from './themes';

const Layout = ({ children }) => {
    return (
        <div>
            <ChakraProvider theme={theme}>
                <VARIUSHeader />
                <Box  
				    m={{
					    sm: "1vh 5vh", 
					    md: "1vh 5vh", 
					    lg:"1vh 8vh", 
					    xl:"1vh 11vh"
				    }}>
                    {children}
                </Box>
                <footer>
                    <Footer />
                </footer>
            </ChakraProvider>
        </div>
    );
};

export default Layout;
