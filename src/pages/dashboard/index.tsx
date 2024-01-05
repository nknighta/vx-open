import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Button, Box, Text, Center } from '@chakra-ui/react';
import Layout from '../../layout/main';
import { ReactNode } from 'react';
import HMeta from '../../components/headmeta';
export default function Home() {
	const { address, isConnected } = useAccount();
	const { disconnect } = useDisconnect();
	const { connect } = useConnect({
		connector: new InjectedConnector(),
	});

	if (isConnected)
		return (
			<Box m={'3rem 10vh'}>
				<HMeta
					pageTitle={'Dashboard'}
					pageDescription={'see your account data and wallet'}
					pageImg={'/api/og?title=Dashboard&desc=see%20your%20account%20data%20and%20wallet'}
				/>
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
				<Button
					onClick={() => disconnect()}
					bgColor={"brand.100"}
					color={"textcolor.800"}
					_hover={{
						bgColor: "textcolor.800",
						color: "brand.100"
					}}>
					Disconnect
				</Button>
			</Box>
		);
	return (
		<div
			style={{
				padding: '3rem 10vh',
			}}>
			<HMeta
				pageTitle={'Connect'}
				pageDescription={'see your account data and wallet'}
				pageImg={'/api/og?title=Dashboard&desc=see%20your%20account%20data%20and%20wallet'}
			/>
			<Center
				w={'100%'}
				pt={5}>
				<Text fontSize={30}>Connect to your wallet</Text>
			</Center>
			<Center
				w={'100%'}
				pt={10}>
				<Button
					onClick={() => connect()}
					bgColor={"brand.100"}
					color={"textcolor.800"}
					_hover={{
						bgColor: "textcolor.800",
						color: "brand.100"
					}}>
					Connect
				</Button>
			</Center>
			<Center p={10}>
				or create a new account
			</Center>
		</div>
	);
}


Home.getLayout = (page: ReactNode) => {
	return (
		<Layout>

			{page}
		</Layout>
	);
};