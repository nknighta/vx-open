import { ReactNode } from "react";
import HMeta from "../../components/headmeta";
import Layout from "layout/main";
import { Input, Text } from "@chakra-ui/react";

export default function CreateAccount() {
    return (
        <>
            <Text 
                color={"#fff"}
                fontSize={30}
                textAlign={"center"}
                m={"7vh 0 70px 0"}
                >
                <h1>create account</h1>
            </Text>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 0 50px 0"
            }}>
                <Input 
                    placeholder={"username"}
                    width={500}
                    color={"#fff"}
                    m={"0 0 10px 0"}
                />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 0 50px 0"
            }}>
                <Input 
                    placeholder={"Corp or Group Name"}
                    width={500}
                    color={"#fff"}
                    m={"0 0 10px 0"}
                />
            </div>
        </>
    );
}

CreateAccount.getLayout = function getLayout(page: ReactNode) {
    return (
        <Layout>
            {page}
        </Layout>
    );
}