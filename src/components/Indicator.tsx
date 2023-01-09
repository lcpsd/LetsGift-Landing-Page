import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { useSections } from "../context/Sections";

export function Indicator() {
    const { sections, position } = useSections()

    return (
        <Flex
            position="fixed"
            right={5}
            top={0}
            bottom={0}
            direction="column"
            h="100%"
            w="10px"
            justify="center"
            gap={5}
            zIndex={100}
            visibility={{ base: "hidden", lg: "visible" }}
        >
            {
                sections?.map((node, index) => {
                    return (
                        <Box
                            key={index}
                            as={Link}
                            position="relative"
                            to={node?.id}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                        >
                            <Box
                                rounded="md"
                                h="60px"
                                w="100%"
                                border="1px"
                                borderColor={index == position ? "white" : "transparent"}
                                bg={index == position ? "tertiary" : "tertiary025"}
                                transition="all 0.5s"
                                cursor="pointer"
                            />
                        </Box>
                    )
                })
            }
        </Flex>
    )
}