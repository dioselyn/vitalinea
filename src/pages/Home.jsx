import React from "react";
import { BannerTop } from "../components/BannerTop";
import { Container } from "../components/Container";
import { Header } from "../components/Header/";
import { Logo } from "../components/Logo/";
import { MenuToggle } from "../components/MenuToggle/";

import "../styles/home.scss";

function Home() {
  return (
    <React.Fragment>
      <Container>
        <Header>
          <Logo />
          <MenuToggle />
        </Header>
        <BannerTop />
      </Container>
    </React.Fragment>
  );
}

export default Home;
