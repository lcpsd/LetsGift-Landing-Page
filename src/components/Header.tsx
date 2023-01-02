import { Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { HeaderLink } from "./HeaderLink";
import { Logo } from "./Logo";
import { Section } from "./Section";

export function Header() {

    return (
        <Section zIndex="1" w="100%">
            <Flex justify="space-between" w="100%">
                <Logo />

                <Flex gap={5} align="center" fontSize="lg">
                    <HeaderLink title="Início" link="" />
                    <HeaderLink title="Sobre" link="" />
                    <HeaderLink title="Como Funciona" link="" />
                    <HeaderLink title="Comece" link="" />

                    <Button
                        rounded="full"
                        bg="gradient2"
                        _hover={{ filter: "brightness(0.8)" }}
                        transition="0.2s"
                        fontWeight="bold"
                    >
                        Entrar
                    </Button>
                </Flex>
            </Flex>
        </Section>
    )
}