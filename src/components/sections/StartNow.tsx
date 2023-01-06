import { Button, Flex, Text } from "@chakra-ui/react";
import { PrismicRichText } from "@prismicio/react";
import { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { useSections } from "../../context/Sections";
import { client } from "../../services/prismicio";
import { MotionFlex, MotionImage } from "../../utils/chakraFramer";
import { Section } from "../Section";

interface prismicTextProps {
    title: string;
    description: [];
    vectorUrl: string;
}

export function StartNowSection() {

    const { setPosition } = useSections()

    const [text, setText] = useState<prismicTextProps>({} as prismicTextProps)

    async function fetchTextData() {
        const allDocs = await client.getAllByType("startnow")

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
        <InView as="div" onChange={(inView, entry) => inView && setPosition(4)}>
            <Section
                gap={5}
                direction={{ base: "column", lg: "row" }}
                h={{ base: "100%", lg: "100vh" }}
                bgColor={{ base: "secondaryDark", lg: "transparent" }}
                id="startNow"
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
                        {text.title}
                    </Text>

                    <Text
                        fontSize="1.5rem"
                        color="white"
                        textAlign={{ base: "center", lg: "left" }}
                    >
                        <PrismicRichText
                            field={text?.description}
                        />
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
                        src={text.vectorUrl}
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
        </InView >
    )
}