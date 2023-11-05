import React from 'react';
import {Box, Flex, Button, Icon} from '@chakra-ui/react';
import {AccountDataType} from "../types/datatypes";
import {useRouter} from "next/router";

export const  AccountDisp = () => {
    const router = useRouter();
    return (
        <Box bgColor={"#6a17a1"} width={45} borderRadius={50}>
            <Flex p={1} alignItems={"center"} justifyContent={"center"}>
                <Button borderRadius={50} onClick={() => {
                    router.push("/account")
                }}>
                    LL
                </Button>
            </Flex>
        </Box>
    )
};


const accountData: AccountDataType = {
    name: "nknight amamiya",
    icon: "/icon.jpeg"
}
