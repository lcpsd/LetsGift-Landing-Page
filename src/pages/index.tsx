import { Flex, Img, Text } from "@chakra-ui/react";
import { BgImage } from "../components/BgImage";
import { Container } from "../components/Container";
import { Indicator } from "../components/Indicator";
import { Section } from "../components/Section";
import { AboutSection } from "../components/sections/About";
import { HeaderSection } from "../components/sections/Header";
import { HowWorksSection } from "../components/sections/HowWorks";

export default function Home() {

  return (
    <Container scrollSnapType="y mandatory" scrollBehavior="smooth">
      <Indicator />

      <BgImage url="/images/vector01.svg">
        <HeaderSection />
      </BgImage>

      <AboutSection />

      <BgImage
        url="/images/vector03.svg"
        bgColor={{ base: "secondary", lg: "transparent" }}
        bgSize={{ base: "0, 0", lg: "100%, 100%" }}
      >
        <HowWorksSection />
      </BgImage>

    </Container >
  )
}
