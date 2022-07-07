import React from "react";

function MenuToggle({ setModal }) {
  const handleOpenModal = () => {
    setModal(true);
  };

  return (
    <div className="menu-toggle" onClick={handleOpenModal}>
      <div className="menu-toggle__line line--1"></div>
      <div className="menu-toggle__line line--2"></div>
      <div className="menu-toggle__line line--3"></div>
      <div className="menu-toggle__line line--4"></div>
    </div>
  );
}

export { MenuToggle };
