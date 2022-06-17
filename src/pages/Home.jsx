import React from "react";
import { BannerTop } from "../components/BannerTop";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header/";
import { ListContenidoEnergetico } from "../components/ListContenidoEnergetico";
import { Logo } from "../components/Logo/";
import { Menu } from "../components/Menu/";
import { MenuToggle } from "../components/MenuToggle/";
import { SectionContenidoEnergetico } from "../components/SectionContenidoEnergetico";
import { SectionFamiliaVitalinea } from "../components/SectionFamiliaVitalinea";
import { SectioInfo } from "../components/SectionInfo";
import { SocialIcons } from "../components/SocialIcons";

import "../styles/home.scss";

function Home() {
  return (
    <React.Fragment>
      <Container>
        <Header>
          <Logo />
          <Menu />
          <SocialIcons />
          <MenuToggle />
        </Header>
        <BannerTop />
        <SectionContenidoEnergetico>
          <SectioInfo />
          <ListContenidoEnergetico />
        </SectionContenidoEnergetico>
        <SectionFamiliaVitalinea />
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default Home;
