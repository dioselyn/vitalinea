import React from "react";
import fresa8 from "../../assets/img/img-fresas-8.png";
import fresa9 from "../../assets/img/img-fresas-9.png";

function SectionContenidoEnergetico({ children }) {
  return (
    <section className="section__contenido-energetico">
      {children}
      <img src={fresa8} className="image--fresa8" />
      <img src={fresa9} className="image--fresa9" />
    </section>
  );
}

export { SectionContenidoEnergetico };
