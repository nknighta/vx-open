import { ComponentType, ReactNode, Suspense } from 'react';
import Layout from 'layout/main';
import HMeta from 'components/headmeta';
import { getWindowWidth } from '../scripts/getWidth';
import { Center, Box, Text, Grid } from '@chakra-ui/react';
import dynamic from "next/dynamic"
import Image from 'next/image';


const Home = () => {
    const LazyComponent: ComponentType<{}> = dynamic(() => import('../components/threebox'), {
        loading: () => <Loading />,
        ssr: false,
    });
    const width: number = getWindowWidth();
    const padding: string = width > 968 ? '70px' : '20px';
    const flexmode: string = width > 968 ? 'flex' : '';
    return (
        <>
            <HMeta
                pageTitle='Home'
                pageDescription='VARIUS development team'
                pagePath='/'
                pageImg={'/api/og?title=VX-WEB3'}
            />
            <Box h={700}>
                <LazyComponent />
            </Box>
            <Center
                fontFamily={`"REM", sans-serif`}
                fontSize={50}
                padding={padding}
                wordBreak={'break-word'}>
                Start building your web3 development
            </Center>
            <Center fontSize={35}>feature</Center>
            <Center >
                <Grid>
                    <Box
                        m={8}
                        w={400}
                        h={200}
                    >
                        <Box
                            w={400}
                            content=''
                            h={200}
                            borderBottom={"1px solid #7654ff"}
                            borderRight={"1px solid transparent"}
                            position={"absolute"}
                        >
                            <Box p={2} />
                            <Center>
                                <Image
                                    src='check.svg'
                                    width={100}
                                    height={100}
                                    alt='learn web3'
                                />
                            </Center>
                            <Box p={2} />
                            <Center>Learn Web3 development</Center>
                        </Box>
                    </Box>
                    <Box
                        border={"1px solid #9684ff"}
                        w={400}
                        h={200}
                        m={8}>
                        <Box p={2} />
                        <Center>
                            <Image
                                src='app.svg'
                                width={100}
                                height={100}
                                alt='create app'
                            />
                        </Center>
                        <Box p={2} />
                        <Center>Create App using VX</Center>
                    </Box>
                    <Box
                        border={"1px solid #9684ff"}
                        w={400}
                        h={200}
                        m={8}>
                        <Box p={2} />
                        <Center>
                            <Image
                                src='app.svg'
                                width={100}
                                height={100}
                                alt='create app'
                            />
                        </Center>
                        <Box p={2} />
                        <Center>Analyze Data</Center>
                    </Box>

                    <Box
                        border={"1px solid #9684ff"}
                        w={400}
                        h={200}
                        m={8}>
                        <Box p={2} />
                        <Center>
                            <Image
                                src='app.svg'
                                width={100}
                                height={100}
                                alt='create app'
                            />
                        </Center>
                        <Box p={2} />
                        <Center>Eazy Wallet Connection</Center>
                    </Box>
                </Grid>
            </Center>
        </>
    );
};

Home.getLayout = (page: ReactNode): JSX.Element => {
    return <Layout>{page}</Layout>;
};


function Loading(): JSX.Element {
    return <div style={{
        fontSize: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    }}>
        {">_ : "}Loading...
    </div>;
}
export default Home;
