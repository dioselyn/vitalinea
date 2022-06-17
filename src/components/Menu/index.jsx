import React from "react";

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <a href="#" className="menu__link">
            Nuestros productos
          </a>
        </li>
        <li>
          <a href="#" className="menu__link">
            Disfruta cuidarte
          </a>
        </li>
        <li>
          <a href="#" className="menu__link">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
}

export { Menu };
