import {ReactNode} from "react";
import ThreeBox from "components/threebox";
import Layout from "layout/main";
import HMeta from "components/headmeta";
import {getWindowWidth} from "../scripts/getWidth";
import {Wallet} from "../components/wallet";
import {Center} from "@chakra-ui/react";

const Home = () => {
    const width = getWindowWidth();
    const padding = width > 968 ? 100 : 20;
    return (
        <>
            <HMeta pageTitle="Home"
                   pageDescription="VARIUS development team"
                   pageImg={"/header.png"}/>
            <link href="https://fonts.googleapis.com/css2?family=REM:wght@500&display=swap" rel="stylesheet"></link>
            <ThreeBox/>

            <Center>
                <div style={{
                    fontFamily: `"REM", sans-serif`,
                    fontSize: 50,
                    wordWrap: "break-word",
                    padding: padding,
                }}>
                    Start building your web3 app
                </div>
            </Center>
            <Center p={"4vh 0"}>
                <Wallet/>
            </Center>
        </>
    )
        ;
};

Home.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default Home;