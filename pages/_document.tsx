import {Html,Main,NextScript,Head} from "next/document";
import React, {useEffect} from "react";
import { Analytics } from '@vercel/analytics/react';
import HMeta from "components/headmeta";
const MyDocument = () => {
    // test mode
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
                background: "#000021",
                color: "#fff",
            }}>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
};


export default MyDocument;