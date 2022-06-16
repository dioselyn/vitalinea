import React from "react";
import logo from "../../assets/logo/img-logo-vitalinea.png";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} className="logo__image" />
    </div>
  );
}

export { Logo };
