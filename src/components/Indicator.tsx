import { useSectionPos } from "../hooks/useSectionPos"
import { Box, Flex } from "@chakra-ui/react";

export function Indicator() {
    const { position, total } = useSectionPos()

    return (
        <Flex
            position="fixed"
            right={5}
            top={0}
            bottom={0}
            direction="column"
            h="100%"
            w="15px"
            justify="center"
            gap={5}
        >
            {
                [...Array(total)].map((_, index) => (
                    <Box
                        key={index}
                        rounded="md"
                        h="100px"
                        bg={index == position ? "tertiary" : "tertiary025"}
                        transition="all 0.5s"
                    />
                ))
            }
        </Flex>
    )
}