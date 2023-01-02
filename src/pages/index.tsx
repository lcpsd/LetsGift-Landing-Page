import { Flex, Img, Text } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { Section } from "../components/Section";

export default function Home() {
  return (
    <Container position="relative">
      <Section>
        <Flex justify="space-between" zIndex="1">
          <Logo />
        </Flex>
        <Img
          src="/images/gradient1.svg"
          position="absolute"
          left={0}
          top={0}
          zIndex="0"
        />
      </Section>
    </Container>
  )
}
