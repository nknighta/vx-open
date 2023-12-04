import React from "react";
import { WagmiConfig } from "wagmi";
import { config } from "../scripts/metamaskConfig";
import {
    ChakraProvider,
} from "@chakra-ui/react";
import VARIUSHeader from "../components/header";
import Footer from "../layout/footer";

const Layout = ({ children }) => {
    return (
        <div style={{
            background: "#000012",
        }}>
            <ChakraProvider>
                <VARIUSHeader />
                <WagmiConfig config={config}>
                    {children}
                </WagmiConfig>
                <footer>
                    <Footer />
                </footer>
            </ChakraProvider>
        </div>
    );
};

export default Layout;