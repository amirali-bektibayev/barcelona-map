import React from "react";
import { POINTS } from "../../data/points";
import "./Points.style.css";

const Points = ({ id }) => {
  const pointsSS = POINTS.map((point) => (
    <div>
      <div>
        {point.id_address == id ? (
          <div className={`dot x${point.block_address} ${point.type}`}></div>
        ) : (
          ""
        )}
      </div>
    </div>
  ));

  return (
    <div>
      <div>{pointsSS}</div>
    </div>
  );
};

export default Points;
