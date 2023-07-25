import React, { useEffect, useState } from "react";
import { theme } from "../components/chakra-extends";
import { ChakraProvider } from "@chakra-ui/react";
import VARIUSHeader from "components/header";
import Footer from "layout/footer";
interface Props {
    children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        })
    }, [width]);
    return (
        <ChakraProvider theme={theme}>
            <div style={{
                backgroundColor: "#000021",
            }}>
                <VARIUSHeader />
                {children}
                <Footer />
            </div>
        </ChakraProvider>
    );
};

export default Layout;