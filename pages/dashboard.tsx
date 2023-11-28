import { Box ,Text} from "@chakra-ui/react";
import Layout from "../layout/main";
import {ReactNode} from "react";

export default function Dashboad() {
    return (
        <div>
            <Box m={"2rem 10vh"}>
                <Text fontSize={40}>DashBoard</Text>
            </Box>
            <Box m={"1rem 10vh"}>
                Apps
            </Box>
        </div>
    )
}

Dashboad.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};