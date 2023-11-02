import React, {useEffect, useState} from "react";
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
import {getWindowWidth} from "../scripts/getWidth";
import AccountDisp from "../components/accountDisp";
import {HamburgerIcon} from "@chakra-ui/icons";

// breakpoint is 850px
// desktop menu is LightMenuDesktop
// mobile menu is LightMenu

// link array for title text
const pages = [
    {id: 1, name: "software", page: "/software"},
];

export default function VARIUSHeader() {
    const width:number = getWindowWidth();
    const dpadding = width > 990 ? "10vh" : "3vh";

    const ResponseHeaderLayout = () => {
        if (width > 850) {
            return <LightMenuDesktop/>;
        } else {
            return <LightMenu/>;
        }
    };
    return (
        <Box bg={"#000012"} color={"#fff"} p={3} pl={dpadding} pr={dpadding}>
            <Flex>
                <Flex w={"50%"} p={3} alignContent={"center"}>
                    <Link href={"/"}>
                        <Text fontSize={"xl"}>VARIUS projects.</Text>
                    </Link>
                </Flex>
                <Flex w={"50%"} justifyContent={"flex-end"} alignItems={"center"}>
                    <ResponseHeaderLayout/>
                    <AccountDisp />
                </Flex>
            </Flex>
        </Box>
    )
};

const LightMenu = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef()
    return (
        <Box>
            <Button ref={btnRef} colorScheme='black' onClick={onOpen} fontSize={30} w={45} h={45} ml={4} mr={4}>
                <HamburgerIcon/>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent
                    backgroundColor={"#000016"}
                    color={"#fff"}>
                    <DrawerCloseButton/>
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        {
                            pages.map(
                                linkvalue => {
                                    return (
                                        <div key={linkvalue.id}>
                                            <Link as={`/${linkvalue.name}`}
                                                  href={`${linkvalue.page}`} style={{
                                                padding: 10
                                            }}>
                                                {linkvalue.name}
                                            </Link>
                                        </div>
                                    );
                                }
                            )
                        }
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


// for desktop link element
// map and array
function LightMenuDesktop() {
    return (
        <>
            {
                pages.map(
                    linkvalue => {
                        return (
                            <div key={linkvalue.id}>
                                <Link as={`/${linkvalue.name}`}
                                      href={`${linkvalue.page}`} style={{
                                          padding: 10
                                        }}>
                                    {linkvalue.name}
                                </Link>
                            </div>
                        );
                    }
                )
            }
        </>
    )
};