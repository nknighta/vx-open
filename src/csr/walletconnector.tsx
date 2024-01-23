import { Box, Grid, GridItem, Button, Center } from "@chakra-ui/react";
import WalletOptions from 'csr/web3csr.tsx';
import { WagmiProvider } from 'wagmi';
import { config } from "scripts/metamaskConfig.ts";
import { QueryClientProvider, QueryClient } from '@tanstack/query-core';

const queryClient = new QueryClient();
export default function Web3Connector () {
	return (
	<WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        <WalletOptions />
	</QueryClientProvider> 
    </WagmiProvider>
	)	
}
