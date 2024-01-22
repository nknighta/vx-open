import React from 'react';
import { Box, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from '@web3-react/injected-connector';

const LightMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

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
                        <Box m={'7px'}>
                            fix now
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

export default LightMenu;