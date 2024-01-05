import {ComponentType, ReactNode, Suspense} from 'react';
import Layout from 'layout/main';
import HMeta from 'components/headmeta';
import {getWindowWidth} from '../scripts/getWidth';
import Wallet from '../components/wallet';
import {Center, Box, Text} from '@chakra-ui/react';
import dynamic from "next/dynamic"
import Image from 'next/image';


const Home = () => {
    const LoadedWallet = dynamic(() => import('../components/wallet'), {
        loading: () => <Loading/>,
        ssr: false,
    });
    const LazyComponent:ComponentType<{}> = dynamic(() => import('../components/threebox'), {
        loading: () => <Loading/>,
        ssr: false,
    });
    const width:number = getWindowWidth();
    const padding: string = width > 968 ? '70px' : '20px';
    const flexmode: string = width > 968 ? 'flex' : '';
    return (
        <>
            <HMeta
                pageTitle='Home'
                pageDescription='VARIUS development team'
                pageImg={'/api/og?title=VX-WEB3'}
            />
            <link
                href='https://fonts.googleapis.com/css2?family=REM:wght@500&display=swap'
                rel='stylesheet'></link>
                <LazyComponent/>
            <Center
                fontFamily={`"REM", sans-serif`}
                fontSize={50}
                padding={padding}
                wordBreak={'break-word'}>
                Start building your web3 dev.
            </Center>
            <Center p={'4vh 0'}>
                <LoadedWallet/>
            </Center>
            <Center fontSize={35}>feature</Center>
	    <Center>
            <Box display={flexmode}>
                <Box
                    bgColor={'brand.300'}
                    w={400}
                    h={200}
                    m={8}>
                    <Box p={2}/>
                    <Center>
                        <Image
                            src='check.svg'
                            width={100}
                            height={100}
                            alt='learn web3'
                        />
                    </Center>
                    <Box p={2}/>
                    <Center>Learn Web3development</Center>
                </Box>
                <Box
                    bgColor={'brand.300'}
                    w={400}
                    h={200}
                    m={8}>
                    <Box p={2}/>
                    <Center>
                        <Image
                            src='app.svg'
                            width={100}
                            height={100}
                            alt='create app'
                        />
                    </Center>
                    <Box p={2}/>
                    <Center>Create App using VX</Center>
                </Box>
            </Box>
	    </Center>
        </>
    );
};

Home.getLayout = (page: ReactNode): JSX.Element => {
    return <Layout>{page}</Layout>;
};


function Loading():JSX.Element {
    return <div style={{
        fontSize: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40vh',
    }}>
        {">_ : "}Loading...
    </div>;
}
export default Home;
