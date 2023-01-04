import { BgImage } from "../components/BgImage";
import { Container } from "../components/Container";
import { Indicator } from "../components/Indicator";
import { AboutSection } from "../components/sections/About";
import { HeaderSection } from "../components/sections/Header";

export default function Home() {

  return (
    <Container>
      <Indicator />

      <BgImage url="/images/vector01.svg">
        <HeaderSection />
      </BgImage>

      <AboutSection />

    </Container >
  )
}
