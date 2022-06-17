import React from "react";
import logo from "../../assets/logo/img-logo-footer.png";
import danone from "../../assets/img/img-logo-danone.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={danone} className="logo--danone" />
        <img src={logo} className="logo--footer" />
      </div>
      <p className="footer__text footer__text--1">
        Términos y condiciones| Políticas de privacidad | Aviso de privacidad
      </p>
      <p className="footer__text footer__text--2">
        Danone de México 2017 ©. Todos los derechos reservados 2017
      </p>
    </footer>
  );
}

export { Footer };
