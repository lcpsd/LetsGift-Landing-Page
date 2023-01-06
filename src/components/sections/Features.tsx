import { Box, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { InView } from "react-intersection-observer";
import { useSections } from "../../context/Sections";
import { client } from "../../services/prismicio";
import { MotionImage, MotionSimpleGrid, MotionText } from "../../utils/chakraFramer";
import { Card } from "../Card";
import { Section } from "../Section";

interface prismicTextProps {
    title: string;
    description: string;
    vectorUrl: string;
}

export function FeaturesSection() {

    const { setPosition } = useSections()
    const count = useRef(0.1)

    const [text, setText] = useState<prismicTextProps[]>([])

    async function fetchTextData() {
        const allDocs = await client.getAllByType("advantages")

        const sanitize = [
            {
                title: allDocs[0].data.title[0].text,
                description: allDocs[0].data.description[0].text,
                vectorUrl: allDocs[0].data.vector.url
            },
            {
                title: allDocs[0].data.title2[0].text,
                description: allDocs[0].data.description2[0].text,
                vectorUrl: allDocs[0].data.vector2.url
            },
            {
                title: allDocs[0].data.title3[0].text,
                description: allDocs[0].data.description3[0].text,
                vectorUrl: allDocs[0].data.vector3.url
            }
        ]
        setText(sanitize)
    }

    useEffect(() => {
        fetchTextData()
    }, [])

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
                        src="/vector4.svg"
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
                        src="/vector5.svg"
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
                        src="/star.svg"
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
                        src="/star.svg"
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
                            src={text[0]?.vectorUrl}
                            title={text[0]?.title}
                            text={text[0]?.description}
                            animationDelay={0.1}
                        />

                        <Card
                            src={text[1]?.vectorUrl}
                            title={text[1]?.title}
                            text={text[1]?.description}
                            animationDelay={0.2}
                        />

                        <Card
                            src={text[2]?.vectorUrl}
                            title={text[2]?.title}
                            text={text[2]?.description}
                            animationDelay={0.3}
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