import { Img } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Container position="relative">
      <Img
        src="/images/gradient1.svg"
        position="absolute"
        left={0}
        top={0}
        zIndex="1"
      />
      <Header />
    </Container>
  )
}
