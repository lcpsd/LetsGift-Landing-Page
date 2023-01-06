import { Flex, Text } from "@chakra-ui/react";
import { MotionFlex, MotionImage } from "../utils/chakraFramer";

interface CardProps {
    src: string;
    title: string;
    text: string;
    animationDelay?: number;
}

export function Card({ src, title, text, animationDelay = 0 }: CardProps) {

    return (
        <Flex direction="column">
            <MotionImage
                src={src}
                p={10}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn", delay: animationDelay }}
            />

            <MotionFlex
                direction="column"
                px={10}
                pb={10}
                pt={5}
                bg="secondary"
                h="100%"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn", delay: animationDelay }}
            >
                <Text fontSize={{ base: "2rem", lg: "2.5rem" }} w="100%" textAlign="center" fontWeight="bold">{title}</Text>
                <Text fontSize={{ base: "1rem", lg: "1.2rem" }} w="100%" textAlign="center" >
                    {text}
                </Text>
            </MotionFlex>

        </Flex>
    )
}