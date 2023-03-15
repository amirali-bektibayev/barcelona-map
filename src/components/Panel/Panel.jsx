import React, { useEffect, useState } from "react";
import "./Panel.style.css";
import { ALL_POINTS } from "../../data/points/all_points";
import PointsList from "../PointsList/PointsList";
import PanelFilter from "../PanelFilter/PanelFilter";
import usePagination from "../../hooks/usePagination";
import Pagination from "@mui/material/Pagination";

const Panel = ({ getPointId }) => {
  const [filteredPoints, setFilteredPoints] = useState(ALL_POINTS);
  const [points, setPoints] = useState(ALL_POINTS);
  const {
    nextPage,
    prevPage,
    setPage,
    firstContentIndex,
    lastContentIndex,
    page,
    totalPages,
  } = usePagination({ contentPerPage: 5, count: points.length });

  const pointsBlock = points
    .slice(firstContentIndex, lastContentIndex)
    .map((p) => {
      if (points.length === 0) {
        return <div>No</div>;
      }
      return <PointsList key={p.id} getPointId={getPointId} point={p} />;
    });

  const filterHandle = (filteredPoints) => {
    setPoints(filteredPoints);
  };

  const handlePageChange = (e, value) => {
    setPage(value);
  };

  return (
    <div className="panel">
      <PanelFilter filterHandle={filterHandle} />

      <div className="panel-list-wrapper">
        <div className="panel-list-title">List</div>
        <div className="panel-list">
          {points.length == 0 ? (
            <div>
              No points, please select other category or quantity of stars
            </div>
          ) : (
            pointsBlock
          )}
        </div>

        <div className="panel-list-pagination">
          <Pagination onChange={handlePageChange} count={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default Panel;
