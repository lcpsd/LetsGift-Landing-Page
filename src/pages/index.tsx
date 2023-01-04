import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { BgImage } from "../components/BgImage";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { HeaderSection } from "../components/sections/Header";

export default function Home() {
  return (
    <Container>
      <BgImage url="/images/vector01.svg">
        <HeaderSection />
      </BgImage>

      <Section direction={{ base: "column", lg: "row" }} gap={{ base: 2, lg: 5 }}>
        <Flex flex={1} direction="column" position="relative" h="100%" justify="center" pl={10}>
          <Box
            w="2px"
            h="100%"
            bg="secondary"
            left="0"
            top="0"
            bottom="0"
            position="absolute"
          />
          <Text fontSize={{ base: "2rem", lg: "3rem" }} color="secondary" fontWeight="bold">Sobre Nós</Text>
          <Box fontSize={{ base: "1.1rem", lg: "1.8rem" }} color="quaternary">

            <Text>
              O Letsgift é uma plataforma que permite criar listas de presentes desejados e compartilhá-las com amigos e familiares.
            </Text>

            <Text>
              Nossa missão é tornar a escolha de presentes mais fácil e garantir que você receba presentes que realmente importem para você.
            </Text>
          </Box>
        </Flex>

        <Flex flex={1.5} justify="center" align="center">
          <Img src="/images/dev.svg" h="80%" />
        </Flex>
      </Section>
    </Container >
  )
}
