import { ReactNode } from "react";
import Layout from "layout/main";
import { Center, Box, Container, Flex, Text } from "@chakra-ui/react";
import HMeta from "components/headmeta";
import { getWindowWidth } from "../scripts/getWidth";
const Home = () => {
    const width: number = getWindowWidth();
    return (
        <Box>
            <Center>
                <HMeta pageTitle="Software"
                    pageDescription="create software by nknight amamiya" />
                <link href="https://fonts.googleapis.com/css2?family=REM:wght@500&display=swap" rel="stylesheet"></link>
                <Container maxW={"container.xl"} background={"#fff"} color={"#000021"} pt={16} pb={16}>
                    <div style={{
                        fontFamily: `REM`,
                        fontSize: 40,
                        paddingTop: 20,
                        paddingBottom: 20,
                    }}>
                        Sowaftare
                    </div>
                </Container>
            </Center>
            <Box
                h={200}
                p={width > 850 ? 20 : 5}
                paddingTop={10}
                paddingBottom={10}>
                <Flex
                    alignItems={"center"}
                >
                    <Text fontFamily={"REM"} fontSize={30}>
                        Grove Player
                    </Text>
                    <Box p={2} />
                    <Text fontFamily={"REM"} fontSize={20}>
                        Free Music Player (Mac, Windows)
                    </Text>
                </Flex>
                create page now...（；ω；`）
            </Box>
        </Box>
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