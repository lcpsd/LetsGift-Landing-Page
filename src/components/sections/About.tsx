import { Box, Flex, Text } from "@chakra-ui/react";
import { PrismicRichText } from "@prismicio/react";
import { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { useSections } from "../../context/Sections";
import { client } from "../../services/prismicio";
import { MotionBox, MotionImage } from "../../utils/chakraFramer";
import { Section } from "../Section";

interface AboutTextProps {
    title: string;
    description: [];
    vectorUrl: string;
}

export function AboutSection() {

    const { setPosition } = useSections()
    const [aboutText, setAboutText] = useState<AboutTextProps>({} as AboutTextProps)

    async function fetchTextData() {
        const allDocs = await client.getAllByType("aboutdata")

        const sanitize = {
            title: allDocs[0].data.title[0].text,
            description: allDocs[0].data.description,
            vectorUrl: allDocs[0].data.vector.url
        }

        console.log(sanitize)

        setAboutText(sanitize)
    }

    useEffect(() => {
        fetchTextData()
    }, [])

    return (
        <InView as="div" onChange={(inView, entry) => inView && setPosition(1)}>
            <Section
                direction={{ base: "column", lg: "row" }}
                gap={{ base: 2, lg: 5 }}
                align="center"
                id="about"
            >
                <Flex
                    flex={1}
                    direction="column"
                    position="relative"
                    h="100%"
                    justify="center"
                    align="center"
                    pl={10}
                >
                    <MotionBox
                        w="2px"
                        h="100%"
                        bg="secondary"
                        top="0"
                        bottom="0"
                        left="0"
                        position="absolute"
                        initial={{ height: "0px" }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 1 }}
                    />

                    {/* Text */}
                    <MotionBox
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeIn" }}
                    >
                        <Text fontSize={{ base: "2rem", lg: "3rem" }} color="secondary" fontWeight="bold">
                            {aboutText.title}
                        </Text>
                        <Box fontSize="1.5rem" color="quaternary">

                            <PrismicRichText
                                field={aboutText?.description}
                            />
                        </Box>
                    </MotionBox>
                </Flex >

                {/* Vector */}
                <Flex flex={1.5} justify="center" align="center" >
                    <MotionImage
                        src="/images/dev.svg"
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
            </Section >
        </InView>
    )
}