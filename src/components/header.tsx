import React from 'react';
import {
    Flex,
    Link,
    Box
} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import {Icon} from '@chakra-ui/react';
// breakpoint is 850px
// desktop menu is LightMenuDesktop
// mobile menu is LightMenu
import {BiWalletAlt} from 'react-icons/bi';
import LightMenu from './hmenu';
import {useSession} from "next-auth/react";
import Image from "next/image";

export default function VARIUSHeader() {
    const router = useRouter();
    const {data: session} = useSession();
    return (
        <Flex
            w={"100%"}
            h={"80px"}
            bg={'#000012'}
            color={'#fff'}
            justifyContent={"space-between"}
            p={"0.7vh 3vh"}>
            <Box p={"13px 0"}>
                <Link href={'/'}
                      style={{
                          fontSize: "20px"
                      }}>
                    VARIUS projects.
                </Link>
            </Box>
            <Flex
                height={"100%"}
                justifyContent={'flex-end'}
                alignItems={"center"}>
                <LightMenu/>
                <button
                    style={{
                        width: "50px",
                        height: "50px"
                    }}
                    onClick={() => {
                        router.push(process.env.NODE_ENV == "development" ? 'http://localhost:3000/dashboard' : 'https://dev.varius.technology/dashboard');
                    }}>
                    {session ? (
                        <Image
                            src={`${session?.user?.image}`}
                            alt={"user icon"}
                            width={100}
                            height={100}
                            style={{
                                borderRadius: "50px",
                            }}
                        />
                    ) : (
                        <Icon
                            as={BiWalletAlt}
                            color={'#6a17a1'}
                            w={6}
                            h={6}
                        />
                    )}
                </button>
            </Flex>

        </Flex>
    );
}

