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
        </Html>
    )
};

export default MyDocument;