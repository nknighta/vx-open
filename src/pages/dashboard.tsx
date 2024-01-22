import Layout from '../layout/main';
import { ReactNode } from "react";
import { Box, Grid, GridItem, Button, Center } from "@chakra-ui/react";
import HMeta from 'components/headmeta';
import * as React from 'react'
import { Connector, useConnect, useDisconnect, useAccount } from 'wagmi';
import Image from 'next/image';

const testappcontent = [
    {
        "name": "test1",
        "id": 20
    },
    {
        "name": "test1",
        "id": 20
    },
]

function WalletOption({
    connector,
    onClick,
}: {
    connector: Connector
    onClick: () => void
}) {
    const [ready, setReady] = React.useState(false)

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
export default function Dash() {
    const account = useAccount()
    const { address, isConnected } = useAccount()
    const { disconnect } = useDisconnect()

    return (
        <>
            <HMeta pageTitle='Dashboard - v1' />
            <Box>
                {isConnected ? (
                    <div>
                        <p>addres</p>
                        <div>{address}</div>
                        <p>Wallet Provider</p>
                        <div>{account.connector.name}</div>
                        <button onClick={() => disconnect()}>Disconnect</button>
                        <Box>
                            this is sample
                        </Box>
                        <Box pt={4} fontSize={40}>
                            HI! test
                        </Box>
                        <Button>
                            Create
                        </Button>
                        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                            {testappcontent.map(item => (
                                <GridItem
                                    p={1}
                                    bgColor={"#4826ff"}
                                    h={120}
                                    w={120}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    {item.name}
                                </GridItem>
                            ))}
                        </Grid>
                    </div>
                ) : (
                    <div>
                        <WalletOptions />
                    </div>
                )}
            </Box>

        </>
    )
}

Dash.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}