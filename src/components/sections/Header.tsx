import { Box, Button, Flex, Img, Text, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { Menu } from "../Menu";
import { Section } from "../Section";
import { HiMenuAlt3 } from "react-icons/hi"
import { IoMdClose } from "react-icons/io";

export function HeaderSection() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Section>
            <Menu isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

            <Flex h="100%" w="100%" zIndex="1" justify="center">

                <Flex
                    flex="1"
                    align="flex-start"
                    justify="center"
                    direction="column"
                    gap={5}
                >
                    <Box
                        fontSize="95px"
                        fontWeight="bold"
                        w="100%"
                        lineHeight="96px"
                        textTransform="uppercase">
                        <Box>Presentes</Box>
                        <Flex>
                            que <Box color="tertiary" ml={5}>importam!</Box>
                        </Flex>
                    </Box>
                    <Text fontSize="32px">
                        Nunca mais receba presentes ruins! Crie suas listas de presentes desejados e compartilhe com amigos e familiares.
                    </Text>
                    <Button
                        bg="tertiary"
                        colorScheme="purple"
                        fontWeight="semibold"
                        size="lg"
                        rounded="full"
                        w="200px"
                        fontSize="2xl"
                    >
                        Entrar
                    </Button>
                </Flex>

                <Flex flex="1" align="center" justify="center">
                    <Img
                        src="/images/vector02.svg"
                        h="100%"
                    />
                </Flex>

            </Flex>
        </Section>
    )
}