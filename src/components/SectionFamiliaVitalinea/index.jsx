import React from "react";
import griego from "../../assets/img/img-vitalinea-griego.png";
import sinAzucar from "../../assets/img/img-vitalinea-sin-azucar.png";
import bebible from "../../assets/img/img-vitalinea-bebible.png";

function SectionFamiliaVitalinea(params) {
  return (
    <React.Fragment>
      <section className="familia-vitalinea content--mobile">
        <h2 className="familia-vitalinea__title">LA FAMILIA VITALÍNEA</h2>
        <img src={griego} className="familia-vitalinea__image image--1" />
        <img src={sinAzucar} className="familia-vitalinea__image image--2" />
        <img src={bebible} className="familia-vitalinea__image image--3" />
        <span className="familia-vitalinea__span span--1">
          Vitalínea Griego
        </span>
        <span className="familia-vitalinea__span span--2">
          Vitalínea sin Azúcar
        </span>
        <span className="familia-vitalinea__span span--3">
          Vitalínea Bebible
        </span>
      </section>

      <section className="familia-vitalinea__desktop">
        <h2 className="desktop__title">LA FAMILIA VITALÍNEA</h2>
        <div className="desktop__grid">
          <div>
            <img src={griego} className="desktop__image" />
            <p className="desktop__text">Vitalínea Griego</p>
          </div>
          <div>
            <img src={sinAzucar} className="desktop__image" />
            <p className="desktop__text">Vitalínea sin Azúcar</p>
          </div>
          <div>
            <img src={bebible} className="desktop__image" />
            <p className="desktop__text">Vitalínea Bebible</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export { SectionFamiliaVitalinea };
