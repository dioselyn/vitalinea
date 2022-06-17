import React from "react";
import fresa7 from "../../assets/img/img-fresas-7.png";

function ListContenidoEnergetico() {
  return (
    <div className="contenido-energetico">
      <img src={fresa7} className="contenido-energetico__image--fresa7" />
      <div className="contenido-energetico__content">
        <div className="contenido-energetico__description">
          <p>Contenido energético kJ/kcal</p>
          <p>Proteínas (g)</p>
          <p>Grasas (lípidos) (g)</p>
          <p>Grasas saturadas (g)</p>
          <p>Carbohidratos (Hidratos de carbono) (g)</p>
          <p>Azúcares (g)</p>
          <p>Azúcares añadidos (g) </p>
          <p>Fibra dietética (g) </p>
          <p>Sodio (mg)</p>
          <p>Calcio (mg)</p>
          <p>%VNR*</p>
        </div>
        <div className="contenido-energetico__values">
          <p>413,2/97,9</p>
          <p>5.3</p>
          <p>2.1</p>
          <p>1.4</p>
          <p>12.4</p>
          <p>7.7</p>
          <p>0.1</p>
          <p>0.0</p>
          <p>92.7</p>
          <p>199.6</p>
          <p>22</p>
        </div>
      </div>
    </div>
  );
}

export { ListContenidoEnergetico };
