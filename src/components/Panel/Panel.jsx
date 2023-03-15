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
  const [isPoints, setIsPoints] = useState(true);
  const {
    nextPage,
    prevPage,
    setPage,
    firstContentIndex,
    lastContentIndex,
    page,
    totalPages,
  } = usePagination({ contentPerPage: 5, count: filteredPoints.length });

  // const p = filteredPoints
  //   .slice(firstContentIndex, lastContentIndex)
  //   .map((p) => {
  //     return <PointsList key={p.id} getPointId={getPointId} point={p} />;
  //   });

  // console.log(p);

  useEffect(() => {
    setPoints(filteredPoints);
  }, [filteredPoints]);

  const pointsBlock = points
    .slice(firstContentIndex, lastContentIndex)
    .map((p) => <PointsList key={p.id} getPointId={getPointId} point={p} />);

  //   const allPoints = ALL_POINTS.map((point) => {
  //     return <PointsList point={point} />;
  //   });

  const filterHandle = (type, minStars, maxStars) => {
    const filteredTypes = ALL_POINTS.filter((point) => {
      if (type === "all") {
        return point;
      }

      return point.type === type;
    });
    const filtered = filteredTypes.filter((point) => {
      return point.rating >= minStars && point.rating <= maxStars;
    });
    console.log(filtered);
    if (filtered.length == 0) {
      setIsPoints(false);
    } else setIsPoints(true);
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
        <div className="panel-list">
          {isPoints ? pointsBlock : <div>No points</div>}
        </div>

        <div className="panel-list-pagination">
          <Pagination onChange={handlePageChange} count={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default Panel;
