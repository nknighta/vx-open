import Layout from 'layout/main';
import HMeta from 'components/headmeta';
import { Box, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default function Docs() {
    return (
        <>
            <HMeta
                pageTitle={'Documentation'}
                pageDescription={'docs for vx api'}
                pageImg={'/header.png'}
            />
            <Box p={'7vh 4vh'}>
                <Box fontSize={30}>Documentation</Box>
                <Box>now waiting for the api to write docs...</Box>

                <Box
                    fontSize={30}
                    pt={'12px'}>
                    API
                </Box>
                <Box
                    fontSize={20}
                    pt={'1vh'}>
                    <Text>end points</Text>
                    <Text>version</Text>
                </Box>
            </Box>
        </>
    );
}

Docs.getLayout = (page: ReactNode) => {
    return <Layout>{page}</Layout>;
};