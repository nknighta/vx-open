import Layout from '../layout/main';
import { ReactNode } from "react";
import {
    Box,
    Grid,
    GridItem,
    Button,
    Center,
    Text
} from "@chakra-ui/react";
import HMeta from 'components/headmeta';
import * as React from 'react'
import { Connector, useConnect, useDisconnect, useAccount } from 'wagmi';
import Image from 'next/image';

function WalletOption({
    connector,
    onClick,
}: {
    connector: Connector
    onClick: () => void
}) {
    const [ready, setReady] = React.useState(false);
    React.useEffect(() => {
        ; (async () => {
            const provider = await connector.getProvider()
            setReady(!!provider)
        })()
    }, [connector])

    return (
        <Box
            w={400}
            p={"20px 0px 20px 0px"}
        >
            <Center>
                <Button
                    w={200}
                    borderRadius={6}
                    disabled={!ready}
                    onClick={onClick}>
                    {connector.name}
                </Button>
            </Center>
        </Box>
    )
}

export function WalletOptions() {
    const { connectors, connect } = useConnect()

    return connectors.map((connector) => (
        <WalletOption
            key={connector.uid}
            connector={connector}
            onClick={() => connect({ connector })}
        />
    ))
}

// main dashboard content
// this is sample
// 
export default function Dash() {
    const account = useAccount();
    const { address, isConnected } = useAccount()
    const { disconnect } = useDisconnect()
    const userimage = account?.connector?.icon;
    const status = account.status;
    console.log(account);
    return (
        <Box>
            <HMeta pageTitle='Dashboard - v1' />
            <Box>
                {isConnected ? (
                    <div>
                        <Text fontSize={25}>Your Account Data</Text>
                        <Box paddingY={6}>
                            <Image src="/dicon.png" width={100} height={50} alt="dafault icon" />
                        </Box>
                        <Text
                            color={"#fff"}
                            fontSize={"2.5vh"}>
                            Test User Name
                        </Text>

                        <Text
                            color={"#fff"}
                            fontSize={"1.8vh"}>
                            @TestUserID
                        </Text>
                        <Box
                            height={200}
                            paddingY={6}
                        >
                            <Text
                                fontSize={25}>
                                Wallet Info
                            </Text>
                            <Image src={userimage} width={40} height={50} alt="Connected Wallet Icon Image" />
                            <div>{account.connector.name}</div>
                            <p>addres</p>
                            <div>{address}</div>

                        </Box>
                        <Button onClick={() => disconnect()}>Disconnect</Button>
                    </div>
                ) : (
                    <div>
                        <WalletOptions />
                    </div>
                )}
            </Box>
            {status}
        </Box>
    )
}

Dash.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            {process.env.NODE_ENV === 'development' ? (
                <div style={{
                    fontSize: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    backgroundColor: 'green',
                }}>
                    !!!this is local mode!!!
                </div>) : ("")}
            {page}
        </Layout>
    )
}
