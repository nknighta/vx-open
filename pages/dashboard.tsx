import { Box, Text } from '@chakra-ui/react';
import Layout from '../layout/main';
import { ReactNode } from 'react';
import HMeta from '../components/headmeta';
export default function Dashboad() {
    return (
        <div>
            <HMeta
                pageTitle='Home'
                pageDescription='VARIUS development team'
                pageImg={'/api/og?title=DashBoard'}
            />
            <Box m={'2rem 10vh'}>
                <Text fontSize={40}>DashBoard</Text>
            </Box>
            <Box m={'1rem 10vh'}>Apps</Box>
        </div>
    );
}

Dashboad.getLayout = (page: ReactNode) => {
    return <Layout>{page}</Layout>;
};
