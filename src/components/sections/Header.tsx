import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MotionButton, MotionFlex, MotionText } from "../../utils/chakraFramer";
import { Menu } from "../Menu";
import { Section } from "../Section";

export function HeaderSection() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Section>
            <Menu isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

            <Flex h="100% " w="100 % " zIndex="1" justify="center" direction={{ base: "column", lg: "row" }} gap={{ base: 10, lg: 0 }}>

                < Flex
                    flex="1"
                    align={{ base: "center", lg: "flex-start" }
                    }
                    justify="center"
                    direction="column"
                    gap={5}
                >
                    {/* Title */}
                    < MotionFlex
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        fontSize={{ base: "2.5rem", lg: "4rem", xl: "5rem" }}
                        fontWeight="bold"
                        w="100%"
                        textTransform="uppercase"
                        direction="column"
                    >
                        <Text textAlign={{ base: "center", lg: "start" }}>Presentes</Text>
                        <Flex textAlign="center" justify={{ base: "center", lg: "initial" }}>
                            que <Box color="tertiary" ml={5}>importam!</Box>
                        </Flex>
                    </MotionFlex >

                    {/* Subtitle */}
                    < MotionText
                        fontSize={{ base: "1rem", lg: "1.5rem", xl: "2rem" }}
                        textAlign={{ base: "center", lg: "start" }}
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Nunca mais receba presentes ruins! Crie suas listas de presentes desejados e compartilhe com amigos e familiares.
                    </MotionText >

                    {/* Button */}
                    < MotionButton
                        bg="tertiary"
                        colorScheme="purple"
                        fontWeight="semibold"
                        size="lg"
                        rounded="full"
                        w="200px"
                        fontSize="2xl"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Entrar
                    </MotionButton >

                </Flex >

                {/* Vector */}
                < MotionFlex
                    flex="1"
                    align="center"
                    justify="center"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <Img
                        src="/images/vector02.svg"
                        h="100%"
                    />
                </MotionFlex >

            </Flex >
        </Section >
    )
}