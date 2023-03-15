import React from "react";
import {} from "./HoverPoint.helpers";
import "./HoverPoint.style.css";

const HoverPoint = ({ point }) => {
  const block_40_41 = (point_id_adress) => {
    if (point_id_adress == 40) {
      return "block_40";
    }
    if (point_id_adress == 41) {
      return "block_41";
    }
  };

  return (
    <div className={`hover ${block_40_41(point.id_address)} `}>
      <div className="hover-point-item hover-name">
        <span>name:</span> "{point.name}"
      </div>
      <div className="hover-point-item hover-type">
        <span>type:</span> "{point.type}""
      </div>
      <div className="hover-point-more-info">Click to point to see more...</div>
    </div>
  );
};

export default HoverPoint;
