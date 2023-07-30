import {ReactNode} from "react";
import ThreeBox from "components/threebox";
import HMeta from "components/headmeta";
import Layout from "layout/main";
import IndexElementLayout from "layout/indexpage/indexElementLayout";
import {GltfLoadElement} from "../components/gltfLoadElement";

export const metaprops = {
    pageTitle : 'Home',
    pageDescription :'Welcome to VARIUS',
}
const Home = () => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=REM:wght@500&display=swap" rel="stylesheet"></link>
            <HMeta
                {...metaprops}
            />
            <ThreeBox/>
            <IndexElementLayout/>
            <GltfLoadElement/>
        </>
    );
};

Home.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            <Home/>
        </Layout>
    )
};

export default Home;