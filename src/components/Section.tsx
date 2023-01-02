import { ChakraProps, Flex } from "@chakra-ui/react";

interface SectionProps extends ChakraProps {
    children: JSX.Element | JSX.Element[];
}

export function Section({ children, ...rest }: SectionProps) {
    return (
        <Flex w="100%" maxW="1080px" p={10} {...rest}>
            {children}
        </Flex>
    )
}