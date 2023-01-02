import { ChakraStyledOptions, Flex } from "@chakra-ui/react";

interface ContainerProps extends ChakraStyledOptions {
    children: JSX.Element | JSX.Element[];
}

export function Container({ children, ...rest }: ContainerProps) {
    return (
        <Flex w="100%" justify="center" h="100%" align="center" {...rest}>
            <Flex w="100%" maxW="1080px">
                {children}
            </Flex>
        </Flex>
    )
}