import React from 'react';
import {Box,Flex} from '@chakra-ui/react';
import Image from "next/image";
import {getWindowWidth} from "../scripts/getWidth";
import {AccountDataType} from "../types/datatypes";

function AccountDisp() {
    const width: number = getWindowWidth();
    return (
        <Box bgColor={"#6a17a1"} width={width > 1000 ? 300 : 55}>
            <Flex p={2} alignItems={"center"} borderRadius={5}>
                {width > 1000 ? <Box p={2} >{accountData.name} </Box> : null}
                <Image src={accountData.icon} alt={"Account Icon"} width={50} height={50}/>
            </Flex>
        </Box>
    )
};

const accountData: AccountDataType = {
    name: "nknight amamiya",
    icon: "/icon.jpeg"
}

export default AccountDisp;