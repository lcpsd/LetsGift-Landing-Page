import { Box, BoxProps, chakra, Flex, FlexProps, Img, ImgProps, shouldForwardProp, Text } from "@chakra-ui/react";
import { isValidMotionProp, motion, Variants } from "framer-motion";
import { BgImage } from "../components/BgImage";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { AboutSection } from "../components/sections/About";
import { HeaderSection } from "../components/sections/Header";

export default function Home() {

  return (
    <Container>
      <BgImage url="/images/vector01.svg">
        <HeaderSection />
      </BgImage>
      <AboutSection />
    </Container >
  )
}
