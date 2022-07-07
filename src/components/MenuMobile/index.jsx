import React from "react";

function MenuMobile({ menu }) {
  return (
    <nav className="menu-mobile">
      <ul>
        {menu.map((item, index) => (
          <li key={index} className="menu-mobile__link">
            <a href={item.link}>{item.description}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export { MenuMobile };
