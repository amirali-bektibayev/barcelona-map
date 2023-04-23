import React, { useEffect, useState } from "react";
import { ALL_POINTS } from "../../data/points/all_points";
import Point from "../Point/Point";
import { useSelector } from "react-redux";

const Points = ({ id, checkBoxArr, showClickedPoints }) => {
  const [filteredPoints, setFilteredPoints] = useState([]);

  const clickedArr = useSelector((state) => state.clickedPoints.points);

  useEffect(() => {
    if (clickedArr && showClickedPoints) setFilteredPoints(clickedArr);
  }, [clickedArr, showClickedPoints]);

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
