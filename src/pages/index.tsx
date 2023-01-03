import { BgImage } from "../components/BgImage";
import { Container } from "../components/Container";
import { HeaderSection } from "../components/sections/Header";

export default function Home() {
  return (
    <Container>
      <BgImage url="/images/vector01.svg">
        <HeaderSection />


      </BgImage>
    </Container >
  )
}
