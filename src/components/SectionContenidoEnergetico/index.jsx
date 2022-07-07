import React from "react";
import fresa5 from "../../assets/img/img-fresas-5.png";
import fresa6 from "../../assets/img/img-fresas-6.png";
import fresa7 from "../../assets/img/img-fresas-7.png";
import fresa8 from "../../assets/img/img-fresas-8.png";
import fresa9 from "../../assets/img/img-fresas-9.png";

function SectionContenidoEnergetico({ children }) {
  return (
    <section className="section__contenido-energetico">
      {children}
      <img src={fresa5} className="info__image--fresa5" data-aos="fade-up" />
      <img src={fresa6} className="info__image--fresa6" data-aos="fade-up" />
      <img
        src={fresa7}
        className="contenido-energetico__image--fresa7"
        data-aos="fade-up"
      />
      <img src={fresa8} className="info__image--fresa8" data-aos="fade-up" />
      <img src={fresa9} className="image--fresa9" data-aos="fade-up" />
    </section>
  );
}

export { SectionContenidoEnergetico };
