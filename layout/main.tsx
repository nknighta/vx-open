import React, {useEffect, useState} from "react";
import {theme} from "../components/chakra-extends";
import {ChakraProvider} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import VARIUSHeader from "../components/header";

interface Props {
    children: React.ReactNode;
};

const Layout: React.FC<Props> = ({children}) => {
    return (
        <div>
            <ChakraProvider theme={theme}>
                <VARIUSHeader/>
                {children}
            </ChakraProvider>
        </div>
    );
};

export default Layout;