import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { BgImage } from "../components/BgImage";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Section } from "../components/Section";

export default function Home() {
  return (
    <Container>
      <BgImage url="/images/vector01.svg">

        <Section>
          <Header />
          <Flex h="100%" w="100%" zIndex="1" justify="center">

            <Flex flex="1.5" align="center" justify="center" direction="column">
              <Box
                fontSize="80px"
                fontWeight="bold"
                w="100%"
                lineHeight="80px"
                textTransform="uppercase">
                <Box>Presentes</Box>
                <Flex>
                  que <Box color="tertiary">importam!</Box>
                </Flex>
              </Box>
            </Flex>

            <Flex flex="1" align="center" justify="center">

            </Flex>

          </Flex>
        </Section>
      </BgImage>
    </Container >
  )
}
