import { useAccount, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const Wallet = () => {
    const router = useRouter();
    const { isConnected } = useAccount();
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });
    if (isConnected) {
        router.push('/home');
    }
    return <Button onClick={() => connect()}>Connect</Button>;
};
