import React, { useState } from "react";
import HoverPoint from "../HoverPoint/HoverPoint";
import Modal from "../Modal/Modal";
import "./Point.style.css";

const Point = ({ id, point }) => {
  const [hover, setHover] = useState("");
  const [modal, setModal] = useState("");
  const [pointId, setPointId] = useState("");
  const [pointIdForModal, setPointIdForModal] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const hoverHandle = (pointId) => {
    setPointId(pointId);
    setHover(<HoverPoint point={point} />);
  };

  const hoverLeave = () => {
    return setHover("");
  };

  const closeModal = (value) => {
    setIsOpenModal(value);
  };

  const openModalHandle = (pointId) => {
    setPointIdForModal(pointId);
    setIsOpenModal(true);
    setModal(<Modal closeModal={closeModal} point={point} />);
  };

  return (
    <>
      {point.id_address == id ? (
        <div
          onMouseOver={() => hoverHandle(point.id)}
          onMouseLeave={hoverLeave}
          onClick={() => openModalHandle(point.id)}
          className={`dot ${
            point.block_address.toString()[0] == 8 ? "x" : "y"
          }${point.block_address} ${point.type}`}
        >
          {pointId == point.id ? hover : ""}
        </div>
      ) : (
        ""
      )}
      {isOpenModal ? modal : ""}
    </>
  );
};

export default Point;
