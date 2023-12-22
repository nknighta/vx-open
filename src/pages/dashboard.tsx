import { Box, Button} from '@chakra-ui/react';
import Layout from '../layout/main';
import { ReactNode, useEffect, useState } from 'react';
import HMeta from '../components/headmeta';

export default function Dashboad() {
    const [result, setResult] = useState<null>(null);
    useEffect(() => {
        fetch('/api')
            .then((res) => res.json())
            .then((data) => {
                setResult(data);
            })
            .catch((err) => {         
                setResult(err);
            });
    }, []);
    return (
        <div>
            <HMeta
                pageTitle='DashBoard'
                pageDescription='VARIUS development team'
                pageImg={'/api/og?title=DashBoard'}
            />
            <Box>
                Projects
            </Box>
            <Box>
                {result}
            </Box>
            <Button>
                +
            </Button>
        </div>
    );
}

Dashboad.getLayout = (page: ReactNode) => {
    return <Layout>{page}</Layout>;
};
