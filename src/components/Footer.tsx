import { Flex, Text } from "@chakra-ui/react";

export function Footer() {

    const currentYear = new Date().getFullYear()

    return (
        <Flex
            align="center"
            justify="center"
            color="primary"
            bg="secondary"
            h="80px"
            w="100%"
        >
            <Text textAlign="center">
                Copyright Letsgift {currentYear}. Todos os direitos reservados.
            </Text>
        </Flex>
    )
}