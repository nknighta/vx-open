import React, {  ReactNode } from "react";
import Layout from "layout/main";
import { Box, Center, Text } from "@chakra-ui/react";
import HMeta from "components/headmeta";
import Image from "next/image";
export default function About() {
    return (
        <Layout>
            <BgImage />
            <HMeta pageTitle="About VARIUS" />
            <Center
                zIndex={2}
                fontSize={[35 , 45 , 60, 70]}
                padding={"10vh 0"}
                height={"80vh"}
                maxW={"90vh"}
                color={"#000021"}
		p={["0px 20px ", "0px 20px", 0, 0]}>
                Our goal is <br />
                to free ourselves from corporate monopolies and provide a flexible and free development environment. 
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
