import { Box, ChakraProps, ChakraStyledOptions, Flex } from "@chakra-ui/react";

interface BgImageProps extends ChakraProps, ChakraStyledOptions {
    url: string;
    children: JSX.Element | JSX.Element[]
}

export function BgImage({ children, url, ...rest }: BgImageProps) {

    return (
        <Flex
            bgImage={url}
            w="100vw"
            h="100%"
            minH="100vh"
            justify="center"
            bgRepeat="no-repeat"
            {...rest}
        >
            {children}
        </Flex>
    )
}