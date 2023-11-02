import { ReactNode } from "react";
import ThreeBox from "components/threebox";
import Layout from "layout/main";
import IndexElementLayout from "layout/indexpage/indexElementLayout";
import {Box, VStack} from "@chakra-ui/react";
import HMeta from "components/headmeta";
const Home = () => {
    return (
        <>
            <HMeta pageTitle="Home"
                pageDescription="VARIUS development team"
                pageImg={"/header.png"} />
            <link href="https://fonts.googleapis.com/css2?family=REM:wght@500&display=swap" rel="stylesheet"></link>
            <ThreeBox />
            <IndexElementLayout />
            <VStack>
                <Box bgColor={"#6a17a1"} p={4}>
                    aaa
                </Box>
            </VStack>
        </>
    );
};

Home.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default Home;