import { Box, ChakraProps, ChakraStyledOptions, Flex, Img } from "@chakra-ui/react";

interface BgImageProps extends ChakraProps, ChakraStyledOptions {
    url: string;
    children: JSX.Element | JSX.Element[]
}

export function BgImage({ children, url, ...rest }: BgImageProps) {

    return (
        <Flex
            w="100vw"
            h="100%"
            pointerEvents="none"
            position="relative"
            {...rest}
        >
            <Img
                src={url} h="100vh"
                zIndex={-1000}
                position="absolute"
                left={0}
                top={0}
                visibility={{ base: "hidden", lg: "visible" }}
            />
            {children}
        </Flex>
    )
}