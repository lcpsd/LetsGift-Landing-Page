import { Box, Flex, Icon } from "@chakra-ui/react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { MotionBox } from "../utils/chakraFramer";
import { HeaderLink } from "./HeaderLink";
import { Logo } from "./Logo";

interface Menu {
    toggle: () => void;
    isOpen: boolean;
}

export function Menu({ isOpen, toggle }: Menu) {

    return (
        <Box zIndex={1000}>
            {/* Mobile Menu Button */}
            <Box visibility={{ base: "visible", lg: "hidden" }} fontSize={40} cursor="pointer">
                <Icon
                    as={HiMenuAlt3}
                    position="fixed"
                    right={5}
                    top={5}
                    onClick={toggle}
                    zIndex={11}
                    transform={`scale(${!isOpen ? 1 : 0})`}
                    transition="all 0.2s"
                    color="tertiary"
                />
                <Icon
                    as={IoMdClose}
                    position="fixed"
                    right={5}
                    top={5}
                    onClick={toggle}
                    zIndex={11}
                    transition="all 0.2s"
                    transform={`scale(${!isOpen ? 0 : 1})`}
                    color="tertiary"
                />
            </Box>

            {/* Menu options */}
            <Flex
                bg={{ base: "secondary", lg: "transparent" }}
                justify={{ base: "center", lg: "space-between" }}
                align="center"
                w="100%"
                zIndex={10}
                left={{ base: isOpen ? "0" : "-40rem", lg: "0" }}
                right="0"
                top="0"
                bottom="0"
                position={{ base: "fixed", lg: "initial" }}
                direction={{ base: "column", lg: "row" }}
                transition="all 0.2s ease-out"
            >
                {/* Logo */}
                <Logo
                    fontSize={{ base: "4xl", lg: "2xl" }}
                    order={{ base: 2, lg: "initial" }}
                    mt={{ base: 10, lg: 0 }}
                />

                {/* Options */}
                <Flex
                    gap={5}
                    align="center"
                    fontSize={{ base: "4xl", lg: "2xl" }}
                    direction={{ base: "column", lg: "row" }}
                    cursor="pointer"
                >
                    <MotionBox
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <HeaderLink title="Início" link="header" toggle={toggle} />
                    </MotionBox>

                    <MotionBox
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <HeaderLink title="Sobre" link="about" toggle={toggle} />
                    </MotionBox>

                    <MotionBox
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <HeaderLink title="Como Funciona" link="howWorks" toggle={toggle} />
                    </MotionBox>

                    <MotionBox
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <HeaderLink title="Comece" link="startNow" toggle={toggle} />
                    </MotionBox>
                </Flex>
            </Flex>
        </Box>
    )
}