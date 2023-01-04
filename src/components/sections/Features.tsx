import { Box, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { Card } from "../Card";
import { Section } from "../Section";

export function FeaturesSection() {

    return (
        <Section
            direction="column"
            justify="center"
            align="center"
        >
            <Text
                fontSize={{ base: "2rem", lg: "3rem" }}
                color="secondary"
                w="100%"
                maxW="1200px"
                textAlign="left"
                fontWeight="bold">
                Vantagens
            </Text>

            <Flex
                w="100%"
                maxW="1200px"
                justify="center"
                align="center"
                direction="column"
                position="relative"
            >

                <Img
                    src="/images/vector4.svg"
                    zIndex={-10}
                    position="absolute"
                    w="100%"
                />

                <Img
                    src="/images/vector5.svg"
                    zIndex={-10}
                    position="absolute"
                    w="100%"
                />

                <Img
                    src="/images/star.svg"
                    position="absolute"
                    left={8}
                    bottom={-10}
                />

                <Img
                    src="/images/star.svg"
                    position="absolute"
                    right={10}
                    top={-10}
                />

                <SimpleGrid
                    columns={{ base: 1, lg: 3 }}
                    bg="tertiary"
                    w="100%"
                    maxW={{ base: "100%", lg: "90%" }}
                    rounded="lg"
                >

                    <Card
                        src="/images/google.svg"
                        title="Login"
                        text="Crie ou entre em sua conta utilizando apenas a conta do google. Assim não é necesário decorar uma nova senha e nem se preocupar com formuários."
                    />

                    <Card
                        src="/images/money.svg"
                        title="Fundos"
                        text="Receba os fundos arrecadados diretamente em sua conta para utilizar como bem entender. Basta apenas criar o presente e receber."
                    />

                    <Card
                        src="/images/infinity.svg"
                        title="Infinidade"
                        text="Crie quantas listas e presentes quiser! Fique a vontade para ter uma para cada evento especial da sua vida e descomplique cada um em apenas alguns Cliques."
                    />

                </SimpleGrid>

                <Box
                    w={{ base: "100%", lg: "90%" }}
                    h="10px"
                    bg="secondary"
                    borderBottomRadius="lg"
                />

            </Flex>
        </Section >
    )
}