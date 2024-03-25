import { Html, Main, NextScript, Head } from 'next/document';
import React, { useEffect } from 'react';
import HMeta from '../components/headmeta';

const MyDocument = () => {
    // test mode
    const [width, setWidth] = React.useState<number>(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });
    }, [width]);
    return (
        <Html>
            <Head />
            <body
                style={{
                    height: 'auto',
                    background: '#000012',
                    color: '#fff',
                    margin: '0 auto',
                }}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default MyDocument;
