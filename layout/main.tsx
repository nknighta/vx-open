import React, {useEffect, useState} from "react";
import {theme} from "../components/chakra-extends";
import {ChakraProvider} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import VARIUSHeader from "../components/header";

interface Props {
    children: React.ReactNode;
};

const Layout: React.FC<Props> = ({children}) => {
    const [width, setWidth] = useState<number>(0);
    const [successload, setSuccessload] = useState<boolean>(false);
    const LoardPrev:React.ComponentType<{}> = dynamic(() =>
            import("layout/load")
        , {ssr: false});
    useEffect(() => {
        setTimeout(() => {
            setSuccessload(true);
        }, 1000);

    }, [successload, width]);
    return (
        <div>
            {successload ?
                // loading: true
                <ChakraProvider theme={theme}>
                    <VARIUSHeader/>
                    {children}
                </ChakraProvider>
                :
                // loading and ssr: false
                <LoardPrev/>
            }
        </div>
    );
};

export default Layout;