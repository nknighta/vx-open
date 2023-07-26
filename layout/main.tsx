import React, {useEffect, useState} from "react";
import {theme} from "../components/chakra-extends";
import {ChakraProvider} from "@chakra-ui/react";
import VARIUSHeader from "components/header";
import Footer from "layout/footer";
import dynamic from "next/dynamic";

interface Props {
    children: React.ReactNode;
};

const GloblColor = ({children}:any) => {
    return (
        <div style={{
            backgroundColor: "#000021",
        }}>
            {children}
        </div>
    )
}

const Layout: React.FC<Props> = ({children}) => {
    const [width, setWidth] = useState<number>(0);
    const [successload, setSuccessload]
        : [boolean, React.Dispatch<React.SetStateAction<boolean>>]
        = useState<boolean>(false);
    const LoardPrev:React.ComponentType<{}> = dynamic(() =>
            import("layout/load").then(modules => modules.default)
        , {ssr: false});
    useEffect(() => {
        setTimeout(() => {
            setSuccessload(true);
        }, 1000);
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        })
    }, [successload, width]);
    return (
        <div style={{
            backgroundColor: "#000021",
            height: "100vh",
        }}>
            {successload ?
                // loading: true
                <ChakraProvider theme={theme}>
                    <VARIUSHeader/>
                    {children}
                    <Footer/>
                </ChakraProvider>
                :
                // loading and ssr: false
                <LoardPrev/>
            }
        </div>
    );
};

export default Layout;