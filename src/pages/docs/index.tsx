import {ReactNode} from "react"
import Layout from "layout/main"
import HMeta from "components/headmeta"
import {Box, Text, Divider} from "@chakra-ui/react"

export default function Docs() {
    return (
        <Box
            marginX={[0, 3, 10, 40]}>
            <Box maxWidth={1500}>
                <HMeta pageTitle="Docs" pageDescription="" pageImg={"/api/og=Docs"}/>
                <Box
                    fontSize={30}
                >
                    Documentation
                    <Divider m={"10px 0 40px 0"}/>
                </Box>
                <Box m={"30px 0"}>
                    <Text fontSize={22}>Layer2 Payment</Text>
                    <Divider m={"10px 0 20px 0"}/>
                    <p>how works vx?</p>
                </Box>
                <Box m={"30px 0"}>
                    <Text fontSize={22}>APIs</Text>
                    <Divider m={"10px 0 20px 0"}/>
                    <p>get ether gas price</p>
                    <p>send ether</p>
                </Box>
            </Box>
        </Box>
    )
}

Docs.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
