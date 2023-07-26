import {ReactNode ,useEffect,useState} from "react";
import ThreeBox from "components/threebox";
import CommonMeta from "components/headmeta";
import Layout from "layout/main";
import { Flex } from "@chakra-ui/react";

type Props = {
    title: string
    description: string
    url: string
    type: string
    imageUrl: string
}

const Home =  () => {
    return (
        <Layout>
            <CommonMeta
                title={"Welcome - VARIUS"}
                description={"VARIUS"}
                url={"https://varius.world"}
                type={"website"}
                imageUrl={"https://varius.world/images/header.png"}
            />
            <div style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                color: "black",
                height: "600px",
            }}>
                <div style={{
                    position: "absolute",
                    width: "100%",
                }}>
                    <ThreeBox />
                </div>
                <div style={{
                    position: "absolute",
                    width: "100%",
                    height: "50vh",
                    fontSize: "4.3rem",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: 50,
                    margin: 50,
                    color: "#fff"
                }}>
                    Welcome Web3 development.
                </div>
            </div>
            <Flex justifyContent={"center"} color={"#fff"} fontSize={35}>
                Make Platform now!
            </Flex>
        </Layout>
    );
};

export default Home;