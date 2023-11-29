import React from "react";
import { WagmiConfig } from "wagmi";
import { config } from "../scripts/metamaskConfig";
import VARIUSHeader from "../components/header";
import { ChakraProvider } from "@chakra-ui/react";

const Layout = ({ children }) => {
    return (
        <div style={{
            background: "#000012",
        }}>
            <ChakraProvider>
                <WagmiConfig config={config}>
                    <VARIUSHeader />
                    {children}
                </WagmiConfig>
            </ChakraProvider>
        </div>
    );
};

export default Layout;