import React from 'react';
import { Box, Button, Flex, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Link, useDisclosure, Text } from '@chakra-ui/react';
import { getWindowWidth } from '../scripts/getWidth';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { Icon } from '@chakra-ui/react';
// breakpoint is 850px
// desktop menu is LightMenuDesktop
// mobile menu is LightMenu
import { BiWalletAlt } from 'react-icons/bi';
import LightMenu from './hmenu';

export default function VARIUSHeader() {
    const width: number = getWindowWidth();
    const dpadding = width > 990 ? '10vh' : '3vh';
    const router = useRouter();
    return (
        <Box
            bg={'#000012'}
            color={'#fff'}
            p={3}
            pl={dpadding}
            pr={dpadding}>
            <Flex>
                <Flex
                    w={'50%'}
                    p={3}
                    alignContent={'center'}>
                    <Link href={'/'}>
                        <Text fontSize={'xl'}>VARIUS projects.</Text>
                    </Link>
                </Flex>
                <Flex
                    w={'50%'}
                    justifyContent={'flex-end'}
                    alignItems={'center'}>
                    <LightMenu />
		<Box
	            bgColor={'#6a17a1'}
        	    width={45}
	            borderRadius={50}>
        	    <Flex
                	p={1}
	                alignItems={'center'}
        	        justifyContent={'center'}>
                	<Button
	                    borderRadius={50}
        	            onClick={() => {
                	        router.push('/dashboard');
	                    }}>
        		            <Icon
	        	                as={BiWalletAlt}
        	        	        color={'#6a17a1'}
		                        w={6}
                		        h={6}
			             />
                	</Button>
	            </Flex>
	        </Box>

                </Flex>
            </Flex>
        </Box>
    );
}

