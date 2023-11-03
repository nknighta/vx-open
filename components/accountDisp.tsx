import React from 'react';
import {Box,Flex} from '@chakra-ui/react';
import Image from "next/image";
import {AccountDataType} from "../types/datatypes";

export const  AccountDisp = () => {
    return (
        <Box bgColor={"#6a17a1"} width={45} borderRadius={50}>
            <Flex p={1} alignItems={"center"} justifyContent={"center"}>
                <Image src={accountData.icon} alt={"Account Icon"} width={60} height={50} style={{borderRadius: 50}}/>
            </Flex>
        </Box>
    )
};

const accountData: AccountDataType = {
    name: "nknight amamiya",
    icon: "/icon.jpeg"
}
