import React from "react";
import {
  xFirstHovCon,
  xSecondHovCon,
  yFirstHovCon,
  ySecondHovCon,
} from "./HoverPoint.helpers";
import "./HoverPoint.style.css";

const HoverPoint = ({ point }) => {
  return (
    <div
      className={`hover ${xFirstHovCon(point.block_address)} ${xSecondHovCon(
        point.block_address
      )} ${yFirstHovCon(point.block_address)} ${ySecondHovCon(
        point.block_address
      )}`}
    >
      <div className="hover-point-item hover-name">
        <span>name:</span> "{point.name}"
      </div>
      <div className="hover-point-item hover-type">
        <span>type:</span> "{point.type}""
      </div>
    </div>
  );
};

export default HoverPoint;
