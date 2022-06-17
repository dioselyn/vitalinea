import React from "react";
import griego from "../../assets/img/img-vitalinea-griego.png";
import sinAzucar from "../../assets/img/img-vitalinea-sin-azucar.png";
import bebible from "../../assets/img/img-vitalinea-bebible.png";

function SectionFamiliaVitalinea(params) {
  return (
    <section className="familia-vitalinea">
      <h2 className="familia-vitalinea__title">LA FAMILIA VITALÍNEA</h2>
      <img src={griego} className="familia-vitalinea__image image--1" />
      <img src={sinAzucar} className="familia-vitalinea__image image--2" />
      <img src={bebible} className="familia-vitalinea__image image--3" />
      <span className="familia-vitalinea__span span--1">Vitalínea Griego</span>
      <span className="familia-vitalinea__span span--2">
        Vitalínea sin Azúcar
      </span>
      <span className="familia-vitalinea__span span--3">Vitalínea Bebible</span>
    </section>
  );
}

export { SectionFamiliaVitalinea };
