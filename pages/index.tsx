import {ReactNode ,useEffect,useState} from "react";
import ThreeBox from "components/threebox";
import HMeta from "components/headmeta";
import Layout from "layout/main";
import { Flex,Container ,Box} from "@chakra-ui/react";
import Head from "next/head";
const Home =  () => {
    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        })
    },[width]);
    const displaymode= width > 950 ? "flex" : "block";
    return (
        <>
            <HMeta
                pageTitle={'Welcome'}
                pageDescription={'site description'}
                pageImg={'/header.png'}
                pageImgWidth={1280}
                pageImgHeight={960}
            />
            <Head>
                <meta name="twitter:image" content="https://varius.technology/header.png" />
            </Head>
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
            <Box h={200}>

            </Box>
        </>
    );
};

Home.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            <Home />
        </Layout>
    )
};

export default Home;