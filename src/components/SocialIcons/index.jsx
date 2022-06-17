import React from "react";
import facebook from "../../assets/icons/img-social-facebook.png";
import instagram from "../../assets/icons/img-social-instagram.png";
import youtube from "../../assets/icons/img-social-youtube.png";

function SocialIcons() {
  return (
    <div className="social-icon">
      <img src={facebook} className="social-icon__icon" />
      <img src={instagram} className="social-icon__icon" />
      <img src={youtube} className="social-icon__icon" />
    </div>
  );
}

export { SocialIcons };
