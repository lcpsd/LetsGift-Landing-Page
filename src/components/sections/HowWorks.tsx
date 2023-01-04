import { Flex, Img, Text } from "@chakra-ui/react";
import { Section } from "../Section";

export function HowWorksSection() {

    return (
        <Section
            gap={5}
            direction={{ base: "column", lg: "row" }}
            h={{ base: "100%", lg: "100vh" }}
        >
            <Flex
                align="center"
                justify="center"
                flex={1}
                order={{ base: 1, lg: 0 }}
            >
                <Img
                    src="/images/maintenance.svg"
                />
            </Flex>

            <Flex
                direction="column"
                align="center"
                justify="center"
                flex={1}
                pr={5}
            >
                <Text color="tertiary" fontWeight="bold" fontSize="3rem" textAlign={{ base: "center", lg: "right" }} w="100%">
                    Como Funciona
                </Text>

                <Text fontSize="1.8rem" color="white" textAlign={{ base: "center", lg: "right" }}>
                    Para usar o Letsgift, basta fazer login com sua conta Google e começar a criar suas listas de presentes. É possível criar quantas listas quiser, dependendo das ocasiões e dos seus gostos pessoais.

                    Quem está presenteando também pode pagar os presentes por porcentagem, fazendo com que outras pessoas possam dividir o valor do presente entre si.
                </Text>
            </Flex>
        </Section>
    )
}