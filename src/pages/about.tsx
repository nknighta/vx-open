import React, {  ReactNode } from "react";
import Layout from "layout/main";
import { Box, Center, Text } from "@chakra-ui/react";
import HMeta from "components/headmeta";
import Image from "next/image";
export default function About() {
    return (
        <>
            <BgImage />
            <HMeta pageTitle="About VARIUS" />
            <Center
                zIndex={2}
                fontSize={50}
                padding={10}
                height={"60vh"}
                maxW={"90vh"}
                color={"#000021"}>
                Our goal is to free ourselves from corporate monopolies and provide a flexible and free development environment.
            </Center>
            <Box bgColor={"#00000098"} padding={"2vh 20px"}>
                <Text fontSize={40}>
                    Menbers
                </Text>
                <Box height={10}/>
                <Box>
                    <Text color={"#fff"} fontSize={30}>
                    Nknight AMAMIYA 
                    </Text>
                    - leader and student web developer
                </Box>
            </Box>
            <Box bgColor={"#00000098"} padding={"2vh 20px"}>
                <Text fontSize={40}>
                    Product
                </Text>
                <Box height={10}/>
                <Box>
                    <Text color={"#fff"} fontSize={30}>
                    VX
                    </Text>
                    - Web3 platform
                </Box>
            </Box>
        </>
    )
}

About.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

const BgImage = () => {
    return (
        <div>
            <Image
                src={"/corp.png"}
                layout={`fill`}
                objectFit={`cover`}
                alt="bgImage"
                style={{
                    position: "absolute",
                    zIndex: -1,
                    opacity: 0.75
                }}
            />
        </div>
    )
}