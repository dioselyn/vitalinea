import React from "react";
import fresa5 from "../../assets/img/img-fresas-5.png";
import fresa8 from "../../assets/img/img-fresas-8.png";
import bote from "../../assets/img/img-bote-fresa.png";
import sello from "../../assets/img/img-sello-avalado.png";
import calorias from "../../assets/img/img-100-kcal.png";
import icon from "../../assets/icons/flecha.png";

function BannerTop() {
  return (
    <div className="banner-top">
      <img
        src={fresa5}
        className="banner-top__image banner-top__image--fresa5"
      />
      <img
        src={fresa8}
        className="banner-top__image banner-top__image--fresa8"
      />
      <img src={bote} className="banner-top__image banner-top__image--bote" />

      <div className="banner-top__information">
        <div className="information__picker">
          <span className="information__picker--1">Sabor:</span>
          <span className="information__picker--2">Fresa</span>
          <span className="information__picker--3">Guayaba</span>
          <span className="information__picker--4">Toronja</span>
        </div>
        <h3>Vitalínea® Bebible Fresa 217 gr.</h3>
        <p>
          ¡La presentación ideal para llevar contigo! Vitalínea bebible es la
          opción si eres de las personas que siempre están activas y quieren
          probar algo sano, rico y práctico.
        </p>
        <button className="button--primary">Comprar en Walmart</button>
        <div className="information__image">
          <img src={sello} />
          <img src={calorias} />
        </div>
        <button className="banner-top__button button--circle">
          <img src={icon} className="button__arrow" />
        </button>
      </div>
    </div>
  );
}

export { BannerTop };
