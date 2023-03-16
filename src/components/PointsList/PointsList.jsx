import React from "react";
import "./PointsList.style.css";
import Rating from "@mui/material/Rating";
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
        <div>phone: {point.phone_number}</div>
        <div>
          Google maps link:{" "}
          <a href={point.google_map == "-" ? undefined : point.google_map}>
            {point.google_map}
          </a>
        </div>
        <div>
          website:{" "}
          <a href={point.website == "-" ? undefined : point.website}>
            {point.website}
          </a>
        </div>
        <div className="points-list-rating-wrapper">
          <div>Rating:</div>
          <Rating name="read-only" value={point.rating} readOnly />
        </div>
      </div>

      {/* <button onClick={() => getPointId(point.id)}>
        Click here to see this point on map
      </button> */}
    </div>
  );
};

export default PointsList;
