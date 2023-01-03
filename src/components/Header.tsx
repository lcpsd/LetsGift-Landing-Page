import { Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { HeaderLink } from "./HeaderLink";
import { Logo } from "./Logo";
import { Section } from "./Section";

export function Header() {

    return (
        <Flex justify="space-between" w="100%" zIndex="1">
            <Logo />

            <Flex gap={5} align="center" fontSize="lg">
                <HeaderLink title="Início" link="" />
                <HeaderLink title="Sobre" link="" />
                <HeaderLink title="Como Funciona" link="" />
                <HeaderLink title="Comece" link="" />

            </Flex>
        </Flex>
    )
}