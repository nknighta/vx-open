import { ComponentType, useEffect } from 'react';
import Layout from 'layout/main';
import HMeta from 'components/headmeta';
import { Center, Box, Grid } from '@chakra-ui/react';
import dynamic from "next/dynamic"
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Home (){
    const { data: session } = useSession();
    const LazyComponent: ComponentType<{}> = dynamic(() => import('../components/threebox'), {
        loading: () => <Loading />,
        ssr: false,
    });
    const router = useRouter();
    let userstatus = {
        auth: false,
        from: ''
    }
    if (router.query.auth) {
        userstatus.auth = true
    }
    if (router.query.from) {
        userstatus.from = router.query.from as string
    }
    console.log(userstatus)
    useEffect(() => {
        if (session) {
            router.push("/?auth=true&from=dashboard")
        } else {
            router.push("/?from=dashboard")
        }
    }, [session])
    return (
        <Layout>
            <HMeta
                pageTitle='Home'
                pageDescription='VARIUS development team'
                pagePath='/'
                pageImg={'/api/og?title=VX-WEB3'}
            />
            <Box h={700}>
                <LazyComponent />
            </Box>
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
                                    src='app.svg'
                                    width={100}
                                    height={100}
                                    alt='learn web3'
                                />
                            </Center>
                            <Box p={2} />
                            <Center>Create App using VX</Center>
                        </Box>
                    </Box>
                    <Box p={5}>
                        {userstatus.auth ? "authed" : "not auth"}
                    </Box>
                </Grid>
            </Center>
        </Layout>
    );
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
