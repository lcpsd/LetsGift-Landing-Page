import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { MotionBox, MotionFlex, MotionImage } from "../../utils/chakraFramer";
import { Section } from "../Section";

export function StartNowSection() {

    return (
        <Section
            gap={5}
            direction={{ base: "column", lg: "row" }}
            h={{ base: "100%", lg: "100vh" }}
            bgColor={{ base: "secondaryDark", lg: "transparent" }}
        >
            {/* Text */}
            <MotionFlex
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                direction="column"
                align={{ base: "center", lg: "flex-start" }}
                justify="center"
                flex={1}
                pl={{ base: 0, lg: 20 }}
                position="relative"
                gap={5}
            >

                <Text
                    color="tertiary"
                    fontWeight="bold"
                    fontSize={{ base: "2rem", lg: "3rem" }}
                    textAlign={{ base: "center", lg: "left" }}
                    w="100%"
                >
                    Comece Agora!
                </Text>

                <Text
                    fontSize={{ base: "1.1rem", lg: "1.8rem" }}
                    color="white"
                    textAlign={{ base: "center", lg: "left" }}
                >
                    Não fique mais recebendo presentes ruins! Comece a usar o Letsgift agora e garanta que receba presentes que realmente importem para você.

                    É fácil, basta fazer login com sua conta Google e começar a criar suas listas de presentes.
                </Text>

                <Button
                    colorScheme="blue"
                    bg="tertiary"
                    rounded="full"
                    w={{ base: "200px", lg: "300px" }}
                    h={{ base: "60px", lg: "80px" }}
                    fontSize="2rem"
                >
                    Entrar
                </Button>
            </MotionFlex>

            {/* Vector */}
            <Flex
                align="flex-end"
                justify="center"
                flex={1.5}
                order={{ base: 1, lg: 0 }}
            >
                <MotionImage
                    src="/images/finish.svg"
                    h="80%"
                    initial={{ x: -200 }}
                    animate={{ x: 100 }}
                    transition={{
                        duration: 60,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                />
            </Flex>
        </Section>
    )
}