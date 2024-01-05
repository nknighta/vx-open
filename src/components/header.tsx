import React from 'react';
import { Box, Button, Flex, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Link, useDisclosure, Text } from '@chakra-ui/react';
import { getWindowWidth } from '../scripts/getWidth';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Icon } from '@chakra-ui/react';
// breakpoint is 850px
// desktop menu is LightMenuDesktop
// mobile menu is LightMenu
import { BiWalletAlt } from 'react-icons/bi';


export default function VARIUSHeader() {
    const width: number = getWindowWidth();
    const dpadding = width > 990 ? '10vh' : '3vh';
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
                    <AccountDisp />
                </Flex>
            </Flex>
        </Box>
    );
}

export const AccountDisp = () => {
    const router = useRouter();
    return (
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
    );
};


const LightMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const router = useRouter();
    return (
        <Box>
            <Button
                ref={btnRef}
                colorScheme='black'
                onClick={onOpen}
                fontSize={30}
                w={45}
                h={45}
                ml={4}
                mr={4}>
                <HamburgerIcon />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent
                    backgroundColor={'#000016'}
                    color={'#fff'}>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        <Box m={'7px'}>
                            <NextLink
                                href={'/'}
                                onClick={onClose}>
                                Home
                            </NextLink>
                        </Box>
                        <Box m={'7px'}>
                            <NextLink
                                href={'/dashboard'}
                                onClick={onClose}>
                                Dashboard
                            </NextLink>
                        </Box>

                        <Box m={'7px'}>
                            <NextLink
                                href={'/blog'}
                                onClick={onClose}>
                                Blog
                            </NextLink>
                        </Box>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button
                            variant='outline'
                            mr={3}
                            onClick={onClose}
                            colorScheme='white'>
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};
