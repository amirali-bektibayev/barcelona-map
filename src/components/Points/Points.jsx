import React, { useEffect, useState } from "react";
import Point from "../Point/Point";

const Points = ({ id, checkBoxArr }) => {
  const [filteredPoints, setFilteredPoints] = useState([]);

  useEffect(() => {
    if (checkBoxArr) setFilteredPoints(checkBoxArr);
  }, [checkBoxArr]);

  const points_of_block = filteredPoints.map((point) => {
    return <Point key={point.id} id={id} point={point} />;
  });

  return (
    <div>
      <div className="dot-wrapper">{points_of_block}</div>
    </div>
  );
};

export default Points;
