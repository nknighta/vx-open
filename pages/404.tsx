import Layout from "layout/main";
import NextLink from "next/link";
import { Box, Text} from "@chakra-ui/react";
import HMeta from "components/headmeta";
export default function Custom404() {
    return (
        <Layout>
            <HMeta pageTitle={">:("} pageDescription={"page not found"} />
            <Box p={"3vh"} h={"55vh"}>
                <Box fontSize={49}>
                    404 {">:("}
                </Box>
                <Box fontSize={20}>
                    oops! back to 
                    <Text>
                        <NextLink href={"/"}>
                            home
                        </NextLink>
                    </Text>
                </Box>
            </Box>
        </Layout>
    );
}