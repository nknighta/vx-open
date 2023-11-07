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
        <div style={{
            background: "#000012",
        }}>
            <ChakraProvider>
                <VARIUSHeader/>
                    {children}
            </ChakraProvider>
        </div>
    );
};


export default Layout;