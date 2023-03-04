import React from "react";
import { ALL_POINTS } from "../../data/points/all_points";
import Point from "../Point/Point";

const Points = ({ id }) => {
  const points_of_block = ALL_POINTS.map((point) => {
    return <Point id={id} point={point} />;
  });

  return (
    <div>
      <div>{points_of_block}</div>
    </div>
  );
};

export default Points;
