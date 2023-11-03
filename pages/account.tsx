import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Button } from '@chakra-ui/react'
import Layout from "../layout/main";
import {ReactNode} from "react";
export default function Account(){
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect()
    if (isConnected)
        return (
            <div>
                Connected to {address}
                <button onClick={() => disconnect()}>Disconnect</button>
            </div>
        )
    return <Button onClick={() => connect()}>Connect</Button>
}

Account.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};