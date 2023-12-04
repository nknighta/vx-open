import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Button, Box, Text, Center } from '@chakra-ui/react';
import Layout from '../layout/main';
import { ReactNode } from 'react';
import HMeta from '../components/headmeta';
export default function Home() {
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });

    if (isConnected)
        return (
            <Box m={'3rem 10vh'}>
                <Box>
                    <Text fontSize={30}>Account</Text>
                </Box>
                <Box>
                    <Text fontSize={30}>Address</Text> {address}
                </Box>
                <Box p={4} />
                <Text fontSize={30}>Settings</Text>
                <Text>Change Wallet</Text>
                <Box p={4} />
                <Button onClick={() => disconnect()}>Disconnect</Button>
            </Box>
        );
    console.log(2);
    return (
        <div
            style={{
                padding: '3rem 10vh',
            }}>
            <Center
                w={'100%'}
                pt={5}>
                <Text fontSize={30}>Connect to your wallet</Text>
            </Center>
            <Center
                w={'100%'}
                pt={10}>
                <Button onClick={() => connect()}>Connect</Button>
            </Center>
        </div>
    );
}

Home.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            <HMeta
                pageTitle={'Account'}
                pageDescription={'see your account data and wallet'}
            />
            {page}
        </Layout>
    );
};
