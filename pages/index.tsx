import { ReactNode } from "react";
import ThreeBox from "components/threebox";
import Layout from "layout/main";
import HMeta from "components/headmeta";
import { getWindowWidth } from "../scripts/getWidth";
import { Wallet } from "../components/wallet";
import { Center, Box } from "@chakra-ui/react";

const Home = () => {
    const width = getWindowWidth();
    const padding = width > 968 ? "70px" : "20px";
    const flexmode = width > 968 ? "flex" : "";
    return (
        <>
            
            <HMeta pageTitle="Home"
                pageDescription="VARIUS development team"
                pageImg={"/header.png"} />
            <link href="https://fonts.googleapis.com/css2?family=REM:wght@500&display=swap" rel="stylesheet"></link>
            <ThreeBox />

            <Center
                fontFamily={`"REM", sans-serif`}
                fontSize={50}
                padding={padding}
                wordBreak={"break-word"}>
                Start building your web3 dev.
            </Center>
            <Center p={"4vh 0"}>
                <Wallet />
            </Center>
            <Center fontSize={35}>
                feature
            </Center>
            <Box display={flexmode}>
                <Box bgColor={"#20006690"} w={width > 968 ? "45%" : ""} h={200} m={8}>
                    <Box p={2} />
                    <Center>
                        <img src="check.svg" width={100} />
                    </Center>
                    <Box p={2} />
                    <Center>
                        Learn Web3 development
                    </Center>
                </Box>
                <Box bgColor={"#20006690"} w={width > 968 ? "45%" : ""} h={200} m={8}>
                    <Box p={2}/>
                    <Center>
                        <img src="app.svg" width={100} />
                    </Center>
                    <Box p={2}/>
                    <Center>
                        Create App using VX
                    </Center>
                </Box>
            </Box>
        </>
    )
};

Home.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default Home;