import { Box, BoxProps, chakra, Flex, FlexProps, Img, ImgProps, shouldForwardProp, Text } from "@chakra-ui/react";
import { isValidMotionProp, motion, Variants } from "framer-motion";
import { BgImage } from "../components/BgImage";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { HeaderSection } from "../components/sections/Header";

export default function Home() {

  const MotionImage = motion<Omit<ImgProps, "transition">>(Img)
  const MotionFlex = motion<Omit<FlexProps, "transition">>(Flex)
  const MotionBox = motion<Omit<BoxProps, "transition">>(Box)

  const variants = {
    initial: {
      y: 200
    },
    animate: {
      y: 100
    }
  }

  return (
    <Container>
      <BgImage url="/images/vector01.svg">
        <HeaderSection />
      </BgImage>

      <Section direction={{ base: "column", lg: "row" }} gap={{ base: 2, lg: 5 }}>
        <Flex
          flex={1}
          direction="column"
          position="relative"
          h="100%"
          justify="center"
          pl={10}
        >
          <MotionBox
            w="2px"
            h="100%"
            bg="secondary"
            top="0"
            bottom="0"
            left="0"
            position="absolute"
            initial={{ height: "0px" }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1 }}
          />
          <MotionBox
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <Text fontSize={{ base: "2rem", lg: "3rem" }} color="secondary" fontWeight="bold">Sobre Nós</Text>
            <Box fontSize={{ base: "1.1rem", lg: "1.8rem" }} color="quaternary">

              <Text>
                O Letsgift é uma plataforma que permite criar listas de presentes desejados e compartilhá-las com amigos e familiares.
              </Text>

              <Text>
                Nossa missão é tornar a escolha de presentes mais fácil e garantir que você receba presentes que realmente importem para você.
              </Text>
            </Box>
          </MotionBox>
        </Flex>

        <Flex flex={1.5} justify="center" align="center">
          <MotionImage
            src="/images/dev.svg"
            h="80%"
            initial={{ y: 20 }}
            animate={{ y: -20 }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </Flex>
      </Section>
    </Container >
  )
}
