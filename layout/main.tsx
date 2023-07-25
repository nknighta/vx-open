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
    const [successload, setSuccessload] = useState<boolean>(false);
    useEffect(() => {
        setTimeout(() => {
            setSuccessload(true);
        }, 1000);
    }, [successload]);
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        })
    }, [width]);
    return (
        <div style={{
            backgroundColor: "#000021",
            height: "100vh",
        }}>
            {successload ?
                <ChakraProvider theme={theme}>
                    <VARIUSHeader />
                    {children}
                    <Footer />
                </ChakraProvider>
                : <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    color: "#fff",
                    backgroundColor: "#000021",
                }}>
                    <h1>Loding...</h1>
                </div>}
        </div>
    );
};

export default Layout;