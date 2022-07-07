import React from "react";
import { BannerTop } from "../components/BannerTop";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header/";
import { ListContenidoEnergetico } from "../components/ListContenidoEnergetico";
import { Logo } from "../components/Logo/";
import { Menu } from "../components/Menu/";
import { MenuMobile } from "../components/MenuMobile";
import { MenuToggle } from "../components/MenuToggle/";
import { Modal } from "../components/Modal";
import { SectionContenidoEnergetico } from "../components/SectionContenidoEnergetico";
import { SectionFamiliaVitalinea } from "../components/SectionFamiliaVitalinea";
import { SectioInfo } from "../components/SectionInfo";
import { SocialIcons } from "../components/SocialIcons";
import "../styles/home.scss";

function Home() {
  const menu = [
    { description: "Nuestros productos", link: "#" },
    { description: "Disfruta cuidarte", link: "#" },
    { description: "Blog", link: "#" },
  ];
  const [modal, setModal] = React.useState(false);

  return (
    <React.Fragment>
      <Container>
        <Header>
          <Logo />
          <Menu />
          <SocialIcons />
          <MenuToggle setModal={setModal} />
        </Header>
        <BannerTop />
        <SectionContenidoEnergetico>
          <SectioInfo />
          <ListContenidoEnergetico />
        </SectionContenidoEnergetico>
        <SectionFamiliaVitalinea />
        <Footer />
      </Container>
      {modal && (
        <Modal setModal={setModal}>
          <MenuMobile menu={menu} />
        </Modal>
      )}
    </React.Fragment>
  );
}

export default Home;
