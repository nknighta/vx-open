import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Flex,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    useDisclosure,
    Text
} from "@chakra-ui/react";
export default function VARIUSHeader() {
    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, [width]);

    return (
        <Box bg={"#000"} color={"#fff"} p={3}>
            <Flex>
                <Flex w={"50%"} p={3} alignContent={"center"}>
                    VARIUS
                </Flex>
                <Flex w={"50%"} justifyContent={"flex-end"} alignItems={"center"}>
                    <LightMenu />
                </Flex>
                
            </Flex>
        </Box>
    )
};

const LightMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()
    return (
        <Box>
            <Button ref={btnRef} colorScheme='black' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        <Text>YOYOYO</Text>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose} colorScheme="blue">
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    )
};

const LightMenuDesktop = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()
    return (
        <Box w={"50%"}>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    )
};