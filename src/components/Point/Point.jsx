import React, { useEffect, useState } from "react";
import HoverPoint from "../HoverPoint/HoverPoint";
import Modal from "../Modal/Modal";
import "./Point.style.css";

const Point = ({ id, point, clickedPoint }) => {
  const [hover, setHover] = useState("");
  const [modal, setModal] = useState("");
  const [pointId, setPointId] = useState("");
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
          }${point.block_address} ${point.type} `}
        ></div>
      ) : (
        ""
      )}
      {isOpenModal ? modal : ""}
      {pointId == point.id ? hover : ""}
    </>
  );
};

export default Point;
