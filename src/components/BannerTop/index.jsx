import React from "react";
import fresa2 from "../../assets/img/img-fresas-2.png";
import fresa3 from "../../assets/img/img-fresas-3.png";
import fresa4 from "../../assets/img/img-fresas-4.png";
import fresa5 from "../../assets/img/img-fresas-5.png";
import fresa8 from "../../assets/img/img-fresas-8.png";
import bote from "../../assets/img/img-bote-fresa.png";
import sello from "../../assets/img/img-sello-avalado.png";
import calorias from "../../assets/img/img-100-kcal.png";
import icon from "../../assets/icons/flecha.png";

function BannerTop() {
  return (
    <div className="banner-top">
      <div className="banner-top__mask"></div>

      <img
        src={fresa2}
        className="banner-top__image banner-top__image--fresa2"
      />
      <img
        src={fresa3}
        className="banner-top__image banner-top__image--fresa3"
      />
      <img
        src={fresa4}
        className="banner-top__image banner-top__image--fresa4"
        data-aos="fade-up"
      />
      <img
        src={fresa5}
        className="banner-top__image banner-top__image--fresa5"
      />
      <img
        src={fresa8}
        className="banner-top__image banner-top__image--fresa8"
      />
      <div className="banner-top__section">
        <img
          src={bote}
          className="banner-top__image banner-top__image--bote animated animatedFade fadeInUp"
        />
      </div>

      <div className="banner-top__information">
        <div className="information__picker">
          <span className="information__picker--1">Sabor:</span>
          <span className="information__picker--2">Fresa</span>
          <span className="information__picker--3">Guayaba</span>
          <span className="information__picker--4">Toronja</span>
        </div>
        <h1 className="information__title">Vitalínea® Bebible Fresa 217 gr.</h1>
        <p className="information__text">
          ¡La presentación ideal para llevar contigo! Vitalínea bebible es la
          opción si eres de las personas que siempre están activas y quieren
          probar algo sano, rico y práctico.
        </p>
        <button className="banner-top__button--primary button--primary">
          Comprar en Walmart
        </button>
        <div className="information__image">
          <img src={sello} />
          <img src={calorias} />
        </div>
        <button className="banner-top__button--circle button--circle">
          <img src={icon} className="button__arrow" />
        </button>
      </div>
    </div>
  );
}

export { BannerTop };
