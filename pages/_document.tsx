import {Html,Main,NextScript,Head} from "next/document";
import React, {useEffect} from "react";
import { Analytics } from '@vercel/analytics/react';
import HMeta from "components/headmeta";
import {Box, Text} from "@chakra-ui/react";
import Link from "next/link";
const MyDocument = () => {
    // test mode
    const [width, setWidth] = React.useState<number>(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });

    },[width]);
    return (
        <Html>
            <Analytics />
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="canonical" href="https://dev.varius.technology/"/>
            </Head>
            <HMeta/>
            <body style={{
                height: "auto",
                background: "#000012",
                color: "#fff",
                margin: "0 auto"
            }}>
                <div style={{
                    margin: "0 auto",
                    padding: width > 1000 ? "1vh 4vh" : "1vh 2vh",
                }}>
                    <Main/>
                </div>
                <NextScript/>
            </body>
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
        </Html>
    )
};

export default MyDocument;