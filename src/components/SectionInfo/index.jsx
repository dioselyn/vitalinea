import React from "react";
import fresa5 from "../../assets/img/img-fresas-5.png";
import fresa6 from "../../assets/img/img-fresas-6.png";

function SectioInfo() {
  return (
    <section className="info">
      <img src={fresa5} className="info__image--fresa5" />
      <img src={fresa6} className="info__image--fresa6" />
      <h4 className="info__title">Información nutrimental</h4>
      <p className="info__text">
        Vitalínea® Bebible Guayaba 217gr <br></br> Valor promedio por porción de
        217gr<br></br> Porciones por envase: 1
      </p>
      <p className="info__text--2">
        Ingredientes: <br></br>
        <span>
          Leche descremada pasteurizada y/o reconstituida pasteurizada de vaca.
          3.5% preparado de fruta guayaba (acesulfame K y sucralosa
          (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos
          lácticos.
        </span>
      </p>
    </section>
  );
}

export { SectioInfo };
