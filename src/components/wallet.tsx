import { useAccount, useConnect } from 'wagmi';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Wallet = () => {
    return (
        <div>
            <Button
                colorScheme='black'
                fontSize={20}
                w={45}
                h={45}
                ml={4}
                mr={4}>
                Connect Wallet
            </Button>
        </div>
    )
};

export default Wallet;
