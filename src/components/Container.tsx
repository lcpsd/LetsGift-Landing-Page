import { ChakraProps, Flex } from "@chakra-ui/react";

interface ContainerProps extends ChakraProps {
    children: JSX.Element | JSX.Element[];
}

export function Container({ children, ...rest }: ContainerProps) {
    return (
        <Flex w="100vw" h="100%" justify="center" {...rest}>
            {children}
        </Flex>
    )
}