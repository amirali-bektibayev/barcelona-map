import React from "react";
import "./Modal.style.css";

const Modal = ({ closeModal, point }) => {
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal">
        <div>Modal {point.name}</div>
        <div className="modal-close-btn" onClick={() => closeModal(false)}>
          X
        </div>
      </div>
    </>
  );
};

export default Modal;
