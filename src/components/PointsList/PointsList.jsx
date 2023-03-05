import React from "react";
import "./PointsList.style.css";

const PointsList = ({ point }) => {
  return (
    <div className="points-list-item">
      <div>name: {point.name}</div>
      <div>type: {point.type}</div>
    </div>
  );
};

export default PointsList;
