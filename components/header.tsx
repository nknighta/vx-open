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
import Link from "next/link";

export default function VARIUSHeader() {
    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, [width]);

    return (
        <Box bg={"#000012"} color={"#fff"} p={3}>
            <Flex>
                <Flex w={"50%"} p={3} alignContent={"center"}>
                    <Link href={"/"}>
                        <Text fontSize={"xl"}>VARIUS projects.</Text>
                    </Link>
                </Flex>
                <Flex w={"50%"} justifyContent={"flex-end"} alignItems={"center"}>
                    site ver: 0.7
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
                Menu
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent 
                backgroundColor={"#000016"}
                color={"#fff"}>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        <Text>Product</Text>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose} colorScheme="white">
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    )
};
