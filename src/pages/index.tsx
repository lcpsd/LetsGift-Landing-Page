import { NextSeo } from "next-seo";
import { BgImage } from "../components/BgImage";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Indicator } from "../components/Indicator";
import { AboutSection } from "../components/sections/About";
import { FeaturesSection } from "../components/sections/Features";
import { HeaderSection } from "../components/sections/Header";
import { HowWorksSection } from "../components/sections/HowWorks";
import { StartNowSection } from "../components/sections/StartNow";

export default function Home() {

  return (
    <>
      <NextSeo
        title="Lets Gift - Presentes que importam!"
        description="Nunca mais receba presentes ruins! Crie suas listas de presentes desejados e compartilhe com amigos e familiares."
        canonical="https://www.letsgift.online"
        openGraph={{
          url: 'https://www.letsgift.online',
          title: 'Lets Gift - Presentes que importam!',
          description: 'Nunca mais receba presentes ruins! Crie suas listas de presentes desejados e compartilhe com amigos e familiares.',
          images: [
            {
              url: 'https://i.imgur.com/my6xtOy.png',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://i.imgur.com/bteF8nf.png',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://i.imgur.com/my6xtOy.png' },
            { url: 'https://i.imgur.com/my6xtOy.png' },
          ],
          site_name: 'LetsGift',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <Container overflowX="hidden">
        <Indicator />

        <BgImage
          url="/vector01.svg"
          bgColor={{ base: "secondaryDark", lg: "transparent" }}
        >
          <HeaderSection />
        </BgImage>

        <AboutSection />

        <BgImage
          url="/vector03.svg"
          bgColor={{ base: "secondary", lg: "transparent" }}
          bgSize={{ base: "0, 0", lg: "100%, 100%" }}
        >
          <HowWorksSection />
        </BgImage>

        <FeaturesSection />

        <BgImage
          url="/vector6.svg"
        >
          <StartNowSection />
        </BgImage>
        <Footer />
      </Container >
    </>
  )
}
