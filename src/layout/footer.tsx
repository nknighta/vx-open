import { Box, Text, Grid, GridItem, Icon, createIcon } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { getWindowWidth } from '../scripts/getWidth';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    const width: number = getWindowWidth();
    const isMobile: string = width > 960 ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)';
    const isComlumn: boolean = width > 960 ? true : false;
    return (
        <div
            style={{
                margin: '0 auto',
                padding: '8.2vh 30px 10vh 30px',
                background: '#000000',
            }}>
            <Grid
                templateColumns={isMobile}
                templateRows={isComlumn ? '' : 'repeat(3)'}
                gap={4}
            >
                <GridItem w={"40vh"}>
                    <Text
                        fontSize={20}
                        p={'10px 0'}>
                        Pages
                    </Text>
                    <Box>
                        <Link href={'/blog'}>
                            <Text p={'3px 0'}>Blog</Text>
                        </Link>
                        <Link href={'https://github.com/search?q=owner%3Anknighta+vx&type=repositories'}>
                            <Text p={'3px 0'}>Repositoryes</Text>
                        </Link>
                        <Link href={'https://github.com/nknighta/vx-docs/wiki'}>
                            <Text p={'3px 0'}>Wiki(GitHub)</Text>
                        </Link>
                    </Box>
                </GridItem>
                <GridItem w={"40vh"}>
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
                        <Link href={'https://misskey.io/@nknighta/'}>
                            <Text p={'3px 0'}>Misskey.io</Text>
                        </Link>
                        <Link href={'https://youtube.com/@ama_p213/'}>
                            <Text p={'3px 0'}>Youtube</Text>
                        </Link>
                    </Box>
                </GridItem>
            </Grid>
            <Box fontSize={12}>Made with ❤️ by Nknight 2023</Box>
            <Icon
                as={AiFillGithub}
                w={8}
                h={8}
                mt={2}
                onClick={() => window.open('https://github.com/nknighta/vx')}
                cursor={'pointer'}
            />
        </div>
    );
};

export default Footer;