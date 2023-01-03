import { Box, Flex } from "@chakra-ui/react";

interface BgImageProps {
    url: string;
    children: JSX.Element | JSX.Element[]
}

export function BgImage({ children, url }: BgImageProps) {

    return (
        <Flex
            bgImage={url}
            bgSize={{ base: "auto", lg: "contain" }}
            w="100vw"
            h="100vh"
            justify="center"
            bgRepeat="no-repeat"
        >
            {children}
        </Flex>
    )
}