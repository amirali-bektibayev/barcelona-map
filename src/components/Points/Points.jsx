import React, { useEffect, useState } from "react";
import { ALL_POINTS } from "../../data/points/all_points";
import Point from "../Point/Point";

const Points = ({ id, checkBoxArr, clickedPoint }) => {
  const [filteredPoints, setFilteredPoints] = useState(ALL_POINTS);

  useEffect(() => {
    if (checkBoxArr) setFilteredPoints(checkBoxArr);
  }, [checkBoxArr]);

  const points_of_block = filteredPoints.map((point) => {
    return (
      <Point key={point.id} clickedPoint={clickedPoint} id={id} point={point} />
    );
  });

  return (
    <div>
      <div className="dot-wrapper">{points_of_block}</div>
    </div>
  );
};

export default Points;
