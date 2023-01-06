import { Box, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { BgImage } from "../components/BgImage";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Indicator } from "../components/Indicator";
import { Section } from "../components/Section";
import { AboutSection } from "../components/sections/About";
import { FeaturesSection } from "../components/sections/Features";
import { HeaderSection } from "../components/sections/Header";
import { HowWorksSection } from "../components/sections/HowWorks";
import { StartNowSection } from "../components/sections/StartNow";

export default function Home() {

  return (
    <>
      <Container overflowX="hidden">
        <Indicator />

        <BgImage
          url="/images/vector01.svg"
          bgColor={{ base: "secondaryDark", lg: "transparent" }}
        >
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

        <FeaturesSection />

        <BgImage
          url="/images/vector6.svg"
        >
          <StartNowSection />
        </BgImage>
        <Footer />
      </Container >
    </>
  )
}
