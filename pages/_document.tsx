import React, { useEffect, useState } from "react";
import { Html, Main, Head, NextScript } from "next/document";

const Docs = () => {
    return (
        <Html>
            <Head>
                <script src="http://localhost:8097"></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}


export default Docs;