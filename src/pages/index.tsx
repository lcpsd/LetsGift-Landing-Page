import { Flex, Img, Text } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Section } from "../components/Section";

export default function Home() {
  return (
    <Container position="relative">
      <Section>
        <Img
          src="/images/vector01.svg"
          position="absolute"
          left={0}
          top={0}
          zIndex="1"
        />
        <Header />
        <Flex h="100%" w="100%" zIndex="1">

          <Flex flex="1" align="center" justify="center" direction="column">
            <Text></Text>
          </Flex>

          <Flex flex="1" align="center" justify="center">

          </Flex>

        </Flex>
      </Section>
    </Container>
  )
}
