import React, { useEffect, useState } from "react";
import "./Panel.style.css";
import { ALL_POINTS } from "../../data/points/all_points";
import PointsList from "../PointsList/PointsList";
import PanelFilter from "../PanelFilter/PanelFilter";

const Panel = ({ getPointId }) => {
  const [filteredPoints, setFilteredPoints] = useState(ALL_POINTS);

  const p = filteredPoints.map((p) => {
    return <PointsList getPointId={getPointId} point={p} />;
  });

  //   const allPoints = ALL_POINTS.map((point) => {
  //     return <PointsList point={point} />;
  //   });

  const filterHandle = (value) => {
    const filtered = ALL_POINTS.filter((point) => {
      if (value === "all") {
        return point;
      }
      return point.type === value;
    });
    setFilteredPoints(filtered);
  };

  return (
    <div className="panel">
      <PanelFilter filterHandle={filterHandle} />

      <div className="panel-list-wrapper">
        <div className="panel-list-title">List</div>
        <div className="panel-list">{p}</div>
      </div>
    </div>
  );
};

export default Panel;
