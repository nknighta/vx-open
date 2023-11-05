import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import {Button, Box, Text} from '@chakra-ui/react'
import Layout from "../layout/main";
import {ReactNode} from "react";
import HMeta from "../components/headmeta";
export default function Account(){
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect()
    if (isConnected)
        return (
            <Box m={"3rem 10vh"}>
                <Box>
                    <Text fontSize={30}>Account</Text>  {"test"}
                </Box>
                <Box>
                    <Text fontSize={30}>Address</Text>  {address}
                </Box>
                <Box p={4}/>
                <Text fontSize={30}>Settings</Text>
                <Button onClick={() => disconnect()}>Disconnect</Button>
            </Box>
        )
    return <Button onClick={() => connect()}>Connect</Button>
}

Account.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            <HMeta pageTitle={"Account"} pageDescription={"see your account data and wallet"}/>
            {page}
        </Layout>
    )
};