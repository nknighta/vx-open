import { Box ,Flex} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer style={{
            background: "#000021",
        }}>
            <Box
                background={"#000021"}
                color={"#fff"}
                h={"20em"}>
                <Flex justifyContent={"center"}>
                    <Link href={"https://twitter.com/ama_dev_1"}>
                        Owner Twitter
                    </Link>
                </Flex>
                <Box h={10}/>
                <Flex justifyContent={"center"}
                      background={"#000021"}>
                    <p>@Nknight AMAMIYA 2023 - {currentYear}</p>
                </Flex>
            </Box>
        </footer>
    );
};

export default Footer;