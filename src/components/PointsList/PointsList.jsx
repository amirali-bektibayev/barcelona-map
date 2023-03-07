import React from "react";
import "./PointsList.style.css";

import { PointTypeImage } from "./PointsList.helpers";

const PointsList = ({ point, getPointId }) => {
  return (
    <div className="points-list-item">
      <div>
        <PointTypeImage point={point} />
      </div>
      <div>
        <div>name: {point.name}</div>
        <div>type: {point.type}</div>
        <div>address: {point.address}</div>
      </div>

      {/* <button onClick={() => getPointId(point.id)}>
        Click here to see this point on map
      </button> */}
    </div>
  );
};

export default PointsList;
