import React from "react";
import "./PointsList.style.css";

const PointsList = ({ point, getPointId }) => {
  return (
    <div className="points-list-item">
      <div>name: {point.name}</div>
      <div>type: {point.type}</div>
      <button onClick={() => getPointId(point.id)}>
        Click here to see this point on map
      </button>
    </div>
  );
};

export default PointsList;
