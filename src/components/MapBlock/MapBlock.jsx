import React from "react";
import Points from "../Points/Points";
import "./MapBlock.style.css";
import {
  streetColumn,
  streetRow,
  triangleArago,
  streetEdgeRow,
  streetEdgeColumn,
} from "./MapBlock.helpers";

const MapBlock = ({
  id,
  street_column,
  street_row,
  street_edge,
  display,
  pseudo,
  checkboxValues,
  checkBoxArr,
}) => {
  return (
    <div
      style={{ opacity: display === false ? "0" : "1" }}
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
      />
    </div>
  );
};

export default MapBlock;
