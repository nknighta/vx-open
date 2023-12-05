import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { getWindowWidth } from '../scripts/getWidth';

const Footer = () => {
    const width = getWindowWidth();
    const isMobile = width > 960 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)';
    return (
        <div
            style={{
                margin: '0 auto',
                padding: '8.2vh 30px 10vh 30px',
                background: '#000000',
            }}>
            <Grid
                templateColumns={isMobile}
                gap={6}>
                <GridItem>
                    <Text
                        fontSize={20}
                        p={'10px 0'}>
                        Pages
                    </Text>
                    <Link href={'/docs'} style={{
                        padding: '3px 0',
                    }}>
                        <p>docs</p>
                    </Link>
                    <Link href={'https://github.com/nknighta/vx-docs/wiki'}style={{
                        padding: '3px 0',
                    }}>
                        <p>GitHub wiki</p>
                    </Link>
                </GridItem>
                <GridItem>
                    <Text
                        fontSize={20}
                        p={'10px 0'}>
                        Social
                    </Text>
                    <Box>
                        <Link href={'https://github.com/nknighta/'}>
                            <Text p={'3px 0'}>GitHub</Text>
                        </Link>
                        <Link href={'https://twitter.com/ama_dev_1/'}>
                            <Text p={'3px 0'}>Twitter</Text>
                        </Link>
                        <Link href={'https://youtube.com/@ama_p213/'}>
                            <Text p={'3px 0'}>Youtube</Text>
                        </Link>
                    </Box>
                </GridItem>
            </Grid>

            <Box fontSize={12}>Made with ❤️ by Nknight 2023</Box>
        </div>
    );
};

export default Footer;
