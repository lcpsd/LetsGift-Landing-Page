import { ChakraProps, ChakraStyledOptions, Flex } from "@chakra-ui/react";

interface SectionProps extends ChakraStyledOptions, ChakraProps {
    children: JSX.Element | JSX.Element[];
}

export function Section({ children, ...rest }: SectionProps) {
    return (
        <Flex
            as="section"
            w="100%"
            h="100vh"
            maxW="1990px"
            justify="center"
            direction="column"
            p={10}
            {...rest}>
            {children}
        </Flex>
    )
}