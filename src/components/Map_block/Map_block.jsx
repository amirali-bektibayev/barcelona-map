import React from "react";
import Points from "../Points/Points";
import "./Map_block.style.css";
import {
  streetColumn,
  streetRow,
  triangleArago,
  streetEdgeRow,
  streetEdgeColumn,
} from "./Map.helpers";

const Map_block = ({
  id,
  street_column,
  street_row,
  street_edge,
  display,
  pseudo,
  checkboxValues,
  checkBoxArr,
  showClickedPoints,
}) => {
  return (
    <div
      style={{ opacity: display == false ? "0" : "1" }}
      className={`map_block block_${id}`}
    >
      {/* <div className="map_block-id">{id}</div> */}
      {streetColumn(street_column)}
      {streetRow(street_row)}
      {streetEdgeRow(street_edge, id)}
      {streetEdgeColumn(street_edge, id)}
      {triangleArago(pseudo)}
      <Points
        checkBoxArr={checkBoxArr}
        id={id}
        checkboxValues={checkboxValues}
        showClickedPoints={showClickedPoints}
      />
    </div>
  );
};

export default Map_block;
