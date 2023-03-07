import React from "react";
import "./Modal.style.css";
import Rating from "@mui/material/Rating";

const Modal = ({ closeModal, point }) => {
  return (
    <>
      <div onClick={() => closeModal(false)} className="modal-overlay"></div>
      <div className="modal">
        <div> Name: {point.name}</div>
        <div> Type: {point.type}</div>
        <div> Address: {point.address}</div>
        <div> Phone: {point.phone_number}</div>
        <div>
          Rating: <Rating name="read-only" value={point.rating} readOnly />
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
