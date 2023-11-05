import React, {useEffect, useState} from "react";
import {Box, ChakraProvider, Text} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import VARIUSHeader from "../components/header";
import Link from "next/link";

interface Props {
    children: React.ReactNode;
};

const Layout: React.FC<Props> = ({children}) => {
    return (
        <div>
            <ChakraProvider>
                <VARIUSHeader/>
                    {children}
                <Footer/>
            </ChakraProvider>
        </div>
    );
};

const Footer = () => {
    const [width, setWidth] = React.useState<number>(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });

    },[width]);
    return (
        <footer>
            <div style={{
                padding: 30,
                display: "flex",
                justifyContent: "center",
                background: "#000000"
            }}>
                <Box>
                    <Box>
                        Nknight AMAMIYA © 2023
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
    )
};
export default Layout;