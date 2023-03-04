import React from "react";
import "./Modal.style.css";

const Modal = ({ closeModal, point }) => {
  return (
    <div className="modal">
      <div>Modal {point.name}</div>
      <div onClick={() => closeModal(false)}>Close</div>
    </div>
  );
};

export default Modal;
