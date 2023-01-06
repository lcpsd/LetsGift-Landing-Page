import { Box, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { InView } from "react-intersection-observer";
import { useSections } from "../../context/Sections";
import { MotionImage, MotionSimpleGrid, MotionText } from "../../utils/chakraFramer";
import { Card } from "../Card";
import { Section } from "../Section";

export function FeaturesSection() {

    const { setPosition } = useSections()

    return (
        <InView as="div" onChange={(inView, entry) => inView && setPosition(3)}>
            <Section
                direction="column"
                justify="center"
                align="center"
                h={{ base: "100%", lg: "100vh" }}
                id="features"
            >
                <MotionText
                    fontSize={{ base: "2rem", lg: "3rem" }}
                    color="secondary"
                    w="100%"
                    maxW="1200px"
                    textAlign="left"
                    fontWeight="bold"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                >
                    Vantagens
                </MotionText>

                <Flex
                    w="100%"
                    maxW="1200px"
                    justify="center"
                    align="center"
                    direction="column"
                    position="relative"
                >

                    <MotionImage
                        src="/images/vector4.svg"
                        zIndex={-10}
                        position="absolute"
                        w="100%"
                        initial={{ rotate: 5 }}
                        animate={{ rotate: -5 }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />

                    <MotionImage
                        src="/images/vector5.svg"
                        zIndex={-10}
                        position="absolute"
                        w="100%"
                        initial={{ rotate: 3 }}
                        animate={{ rotate: -3 }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 0.5
                        }}
                    />

                    <MotionImage
                        src="/images/star.svg"
                        position="absolute"
                        left={8}
                        bottom={-10}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 3,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        zIndex={10}
                    />

                    <MotionImage
                        src="/images/star.svg"
                        position="absolute"
                        right={10}
                        top={-10}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 3,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        zIndex={10}
                    />

                    <MotionSimpleGrid
                        columns={{ base: 1, lg: 3 }}
                        bg="tertiary"
                        w="100%"
                        maxW={{ base: "100%", lg: "90%" }}
                        rounded="lg"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeIn" }}
                    >

                        <Card
                            src="/images/google.svg"
                            title="Login"
                            text="Crie ou entre em sua conta utilizando apenas a conta do google. Assim não é necesário decorar uma nova senha e nem se preocupar com formuários."
                            animationDelay={0.2}
                        />

                        <Card
                            src="/images/money.svg"
                            title="Fundos"
                            text="Receba os fundos arrecadados diretamente em sua conta para utilizar como bem entender. Basta apenas criar o presente e receber."
                            animationDelay={0.4}
                        />

                        <Card
                            src="/images/infinity.svg"
                            title="Infinidade"
                            text="Crie quantas listas e presentes quiser! Fique a vontade para ter uma para cada evento especial da sua vida e descomplique cada um em apenas alguns Cliques."
                            animationDelay={0.6}
                        />

                    </MotionSimpleGrid>

                    <Box
                        w={{ base: "100%", lg: "90%" }}
                        h="10px"
                        bg="secondary"
                        borderBottomRadius="lg"
                    />

                </Flex>
            </Section >
        </InView>
    )
}