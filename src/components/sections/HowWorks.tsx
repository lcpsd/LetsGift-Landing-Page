import { Flex, Img, Text } from "@chakra-ui/react";
import { InView } from "react-intersection-observer";
import { useSections } from "../../context/Sections";
import { MotionBox, MotionFlex, MotionImage } from "../../utils/chakraFramer";
import { Section } from "../Section";

export function HowWorksSection() {

    const { setPosition } = useSections()

    return (
        <InView as="div" onChange={(inView, entry) => inView && setPosition(2)} threshold={0.2}>
            <Section
                gap={5}
                direction={{ base: "column", lg: "row" }}
                h={{ base: "100%", lg: "100vh" }}
                id="howWorks"
            >
                {/* Vector */}
                <Flex
                    align="center"
                    justify="center"
                    flex={1.5}
                    order={{ base: 1, lg: 0 }}
                >
                    <MotionImage
                        src="/images/maintenance.svg"
                        h="80%"
                        initial={{ y: 20 }}
                        animate={{ y: -20 }}
                        transition={{
                            duration: 5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </Flex>

                {/* Text */}
                <MotionFlex
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    direction="column"
                    align="center"
                    justify="center"
                    flex={1}
                    pr={10}
                    position="relative"
                >
                    <MotionBox
                        w="2px"
                        h="100%"
                        bg="tertiary"
                        top="0"
                        bottom="0"
                        right="0"
                        position="absolute"
                        initial={{ height: "0px" }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 1 }}
                    />

                    <Text color="tertiary" fontWeight="bold" fontSize={{ base: "2rem", lg: "3rem" }} textAlign="right" w="100%">
                        Como Funciona
                    </Text>

                    <Text fontSize="1.5rem" color="white" textAlign="right">
                        Para usar o Letsgift, basta fazer login com sua conta Google e começar a criar suas listas de presentes. É possível criar quantas listas quiser, dependendo das ocasiões e dos seus gostos pessoais.

                        Quem está presenteando também pode pagar os presentes por porcentagem, fazendo com que outras pessoas possam dividir o valor do presente entre si.
                    </Text>
                </MotionFlex>
            </Section>
        </InView>
    )
}