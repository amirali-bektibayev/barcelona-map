import React from "react";
import "./Modal.style.css";
import Rating from "@mui/material/Rating";

const Modal = ({ closeModal, point }) => {
  return (
    <>
      <div onClick={() => closeModal(false)} className="modal-overlay"></div>
      <div className="modal">
        <div className="modal-line-wrapper">
          <span>Name:</span> {point.name}
        </div>
        <div className="modal-line-wrapper">
          <span>Type:</span> {point.type}
        </div>
        <div className="modal-line-wrapper">
          <span>Address:</span> {point.address}
        </div>
        <div className="modal-line-wrapper">
          <span> Phone:</span> {point.phone_number}
        </div>
        <div className="modal-line-wrapper">
          <span>Rating:</span>
          <Rating name="read-only" value={point.rating} readOnly />
        </div>
        <div
          className="modal-close-btn"
          onClick={() => closeModal(false)}
        ></div>
      </div>
    </>
  );
};

export default Modal;
