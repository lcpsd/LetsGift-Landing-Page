import { Box, Flex, Text } from "@chakra-ui/react";
import { PrismicRichText } from "@prismicio/react";
import { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { useSections } from "../../context/Sections";
import { client } from "../../services/prismicio";
import { MotionBox, MotionFlex, MotionImage } from "../../utils/chakraFramer";
import { Section } from "../Section";

interface prismicTextProps {
    title: string;
    description: [];
    vectorUrl: string;
}

export function HowWorksSection() {

    const { setPosition } = useSections()

    const [text, setText] = useState<prismicTextProps>({} as prismicTextProps)

    async function fetchTextData() {
        const allDocs = await client.getAllByType("howworksdata")

        const sanitize = {
            title: allDocs[0].data.title[0].text,
            description: allDocs[0].data.description,
            vectorUrl: allDocs[0].data.vector.url
        }

        setText(sanitize)
    }

    useEffect(() => {
        fetchTextData()
    }, [])

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
                        src={text.vectorUrl}
                        h={{ base: "100%", lg: "80%" }}
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
                        {text.title}
                    </Text>

                    <Box fontSize="1.5rem" color="white" textAlign="right">
                        <PrismicRichText
                            field={text?.description}
                        />
                    </Box>
                </MotionFlex>
            </Section>
        </InView>
    )
}