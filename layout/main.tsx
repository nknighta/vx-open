import React from "react";
import { WagmiConfig } from "wagmi";
import { config } from "../scripts/metamaskConfig";
import VARIUSHeader from "../components/header";
import {
    ChakraProvider,
    Box,
    Link,
    Text,
} from "@chakra-ui/react";
import { getWindowWidth } from "scripts/getWidth";
import pack from "../package.json";

const Layout = ({ children }) => {
    const width = getWindowWidth();
    return (
        <div style={{
            background: "#000012",
        }}>
            <ChakraProvider>
                <WagmiConfig config={config}>
                    <VARIUSHeader />
                    {children}
                </WagmiConfig>
                        <footer style={{
                            background: "#000000",
                        }}>
                            <div style={{
                                margin: "0 auto",
                                padding: "8.2vh 30px 10vh 30px",
                                display: "flex",
                                justifyContent: "center",
                            }}>
                                <Box>
                                    <Box>
                                        Nknight AMAMIYA © 2023 - ver:{pack.version}
                                    </Box>
                                    <Link href={"https://github.com/nknighta/"}>
                                        <Text p={2}>
                                            GitHub
                                        </Text>
                                    </Link>
                                    <Link href={"https://twitter.com/ama_dev_1/"}>
                                        <Text p={2}>
                                            Twitter
                                        </Text>
                                    </Link>
                                    <Link href={"https://youtube.com/@ama_p213/"}>
                                        <Text p={2}>
                                            Youtube
                                        </Text>
                                    </Link>
                                </Box>
                            </div>
                        </footer>
                    </ChakraProvider>
        </div>
    );
};

export default Layout;