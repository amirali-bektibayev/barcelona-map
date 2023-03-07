import React, { useEffect, useState } from "react";
import "./Panel.style.css";
import { ALL_POINTS } from "../../data/points/all_points";
import PointsList from "../PointsList/PointsList";
import PanelFilter from "../PanelFilter/PanelFilter";
import usePagination from "../../hooks/usePagination";
import Pagination from "@mui/material/Pagination";

const Panel = ({ getPointId }) => {
  const [filteredPoints, setFilteredPoints] = useState(ALL_POINTS);
  const {
    nextPage,
    prevPage,
    setPage,
    firstContentIndex,
    lastContentIndex,
    page,
    totalPages,
  } = usePagination({ contentPerPage: 5, count: filteredPoints.length });

  const p = filteredPoints
    .slice(firstContentIndex, lastContentIndex)
    .map((p) => {
      return <PointsList getPointId={getPointId} point={p} />;
    });

  //   const allPoints = ALL_POINTS.map((point) => {
  //     return <PointsList point={point} />;
  //   });

  const filterHandle = (value) => {
    const filtered = ALL_POINTS.filter((point) => {
      setPage(1);
      if (value === "all") {
        return point;
      }
      return point.type === value;
    });
    setFilteredPoints(filtered);
  };

  const handlePageChange = (e, value) => {
    setPage(value);
  };

  return (
    <div className="panel">
      <PanelFilter filterHandle={filterHandle} />

      <div className="panel-list-wrapper">
        <div className="panel-list-title">List</div>
        <div className="panel-list">{p}</div>

        <div className="panel-list-pagination">
          <Pagination onChange={handlePageChange} count={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default Panel;
