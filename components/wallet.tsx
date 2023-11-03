import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import Link from "next/link";
import { Button } from "@chakra-ui/react";

export const Wallet = () => {
    const {  isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect()
    if (isConnected)
        return (
            <div>
                <Link href={"/account"}>Account</Link>
                <button onClick={() => disconnect()}>Disconnect</button>
            </div>
        )
    return <Button onClick={() => connect()}>Connect</Button>
}