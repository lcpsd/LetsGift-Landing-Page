import { Button, Flex, Text, Icon, Box } from "@chakra-ui/react";
import { HeaderLink } from "./HeaderLink";
import { Logo } from "./Logo";
import { IoMdClose } from "react-icons/io"
import { HiMenuAlt3 } from "react-icons/hi";

interface Menu {
    toggle: () => void;
    isOpen: boolean;
}

export function Menu({ isOpen, toggle }: Menu) {
    return (
        <Box>
            <Icon
                as={HiMenuAlt3}
                position="absolute"
                right={10}
                top={10}
                fontSize={50}
                onClick={toggle}
                zIndex={11}
                transform={`scale(${!isOpen ? 1 : 0})`}
                transition="all 0.2s"
            />
            <Icon
                as={IoMdClose}
                position="absolute"
                right={10}
                top={10}
                fontSize={50}
                onClick={toggle}
                zIndex={11}
                transition="all 0.2s"
                transform={`scale(${!isOpen ? 0 : 1})`}
            />
            <Flex
                bg={{ base: "secondary", lg: "transparent" }}
                justify={{ base: "center", lg: "space-between" }}
                align="center"
                w="100%"
                zIndex="10"
                left={{ base: isOpen ? "0" : "-40rem", lg: "0" }}
                right="0"
                top="0"
                bottom="0"
                position={{ base: "absolute", lg: "initial" }}
                direction={{ base: "column", lg: "row" }}
                transition="all 0.2s ease-out"
            >
                <Logo
                    fontSize={{ base: "4xl", lg: "initial" }}
                    order={{ base: 2, lg: "initial" }}
                    mt={{ base: 10, lg: 0 }}
                />

                <Flex
                    gap={5}
                    align="center"
                    fontSize={{ base: "5xl", lg: "lg" }}
                    direction={{ base: "column", lg: "row" }}
                    onClick={toggle}
                >
                    <HeaderLink title="Início" link="" />
                    <HeaderLink title="Sobre" link="" />
                    <HeaderLink title="Como Funciona" link="" />
                    <HeaderLink title="Comece" link="" />
                </Flex>
            </Flex>
        </Box>
    )
}