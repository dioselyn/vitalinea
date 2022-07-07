import React from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

function Modal({ children, setModal }) {
  const handleCloseModal = () => {
    setModal(false);
  };

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__background">
        <MdClose className="modal__close" onClick={handleCloseModal} />
        <div className="modal__container">{children}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
