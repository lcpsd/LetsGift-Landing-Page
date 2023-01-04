import { Flex, Img, Text } from "@chakra-ui/react";

interface CardProps {
    src: string;
    title: string;
    text: string;
}

export function Card({ src, title, text }: CardProps) {

    return (
        <Flex direction="column">
            <Img src={src} p={10} />

            <Flex
                direction="column"
                px={10}
                pb={10}
                pt={5}
                bg="secondary"
                h="100%"
            >
                <Text fontSize={{ base: "2rem", lg: "2.5rem" }} w="100%" textAlign="center" fontWeight="bold">{title}</Text>
                <Text fontSize={{ base: "1rem", lg: "1.2rem" }} w="100%" textAlign="center" >
                    {text}
                </Text>
            </Flex>

        </Flex>
    )
}