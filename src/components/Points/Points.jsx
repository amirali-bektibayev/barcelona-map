import React, { useState } from "react";
import { POINTS } from "../../data/points";
import "./Points.style.css";
import {
  xFirstHovCon,
  xSecondHovCon,
  yFirstHovCon,
  ySecondHovCon,
} from "./Points.helpers";

const Points = ({ id }) => {
  const [hover, setHover] = useState("");
  const [pointId, setPointId] = useState("");

  const pointsSS = POINTS.map((point) => {
    const hoverDiv = () => {
      return (
        <div
          className={`hover ${xFirstHovCon(
            point.block_address
          )} ${xSecondHovCon(point.block_address)} ${yFirstHovCon(
            point.block_address
          )} ${ySecondHovCon(point.block_address)}`}
        >
          <div>{point.id}</div>
        </div>
      );
    };

    const hoverHandle = (pointId) => {
      setPointId(pointId);
      setHover(hoverDiv);
    };

    const hoverLeave = () => {
      return setHover("");
    };

    return (
      <>
        {point.id_address == id ? (
          <div
            onMouseOver={() => hoverHandle(point.id)}
            onMouseLeave={hoverLeave}
            className={`dot ${
              point.block_address.toString()[0] == 8 ? "x" : "y"
            }${point.block_address} ${point.type}`}
          >
            {pointId == point.id ? hover : ""}
          </div>
        ) : (
          ""
        )}
      </>
    );
  });

  return (
    <div>
      <div>{pointsSS}</div>
    </div>
  );
};

export default Points;
