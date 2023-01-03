import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

interface HeaderLinkProps {
    title: string;
    link: string;
}

export function HeaderLink({ title, link }: HeaderLinkProps) {

    return (
        <Box as={Link} position="relative" href={link}>
            <Box
                position="relative"
            >
                {title}
                <Box
                    position="absolute"
                    h="100%"
                    w="100%"
                    bg="transparent"
                    left="0"
                    bottom="0"
                    _after={{
                        content: '""',
                        position: "absolute",
                        backgroundColor: "secondary",
                        height: "2px",
                        width: "0%",
                        bottom: "0",
                        left: "-10%",
                        transition: "all 0.2s"
                    }}
                    _hover={{
                        "&::after": {
                            width: "120%"
                        }
                    }}
                />
            </Box>
        </Box>
    )
}