import React, {useEffect, useState} from "react";
import {ChakraProvider} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import VARIUSHeader from "../components/header";

interface Props {
    children: React.ReactNode;
};

const Layout: React.FC<Props> = ({children}) => {
    return (
        <div>
            <ChakraProvider>
                <VARIUSHeader/>
                {children}
            </ChakraProvider>
        </div>
    );
};

export default Layout;