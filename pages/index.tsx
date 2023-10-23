import { ReactNode } from "react";
import ThreeBox from "components/threebox";
import Layout from "layout/main";
import IndexElementLayout from "layout/indexpage/indexElementLayout";
import { GltfLoadElement } from "../components/gltfLoadElement";
import { Center } from "@chakra-ui/react";
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
            <GltfLoadElement />
        </>
    );
};

Home.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            <Home />
            <Center p={10} fontSize={20}>
                make platform, stay tune...
            </Center>
        </Layout>
    )
};

export default Home;