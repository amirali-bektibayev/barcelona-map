import React from "react";
import Points from "../Points/Points";
import "./Map_block.style.css";

const Map_block = ({
  id,
  street_column,
  street_row,
  street_edge,
  display,
  pseudo,
}) => {
  const streetColumn = street_column ? (
    <div className="map_block-street-column">{street_column}</div>
  ) : (
    ""
  );

  const streetRow = street_row ? (
    <div className="map_block-street-row">{street_row}</div>
  ) : (
    ""
  );

  const streetEdgeRow =
    street_edge && id == 4 ? (
      <div className="map_block-street-edge-row">{street_edge}</div>
    ) : (
      ""
    );

  const streetEdgeColumn =
    street_edge && id == 22 ? (
      <div className="map_block-street-edge-column">{street_edge}</div>
    ) : (
      ""
    );

  const triangleArago = pseudo ? <div className="triangle_wrapper"></div> : "";

  return (
    <div
      style={{ opacity: display == false ? "0" : "1" }}
      className="map_block"
    >
      <div className="map_block-id">{id}</div>
      {streetColumn}
      {streetRow}
      {streetEdgeRow}
      {streetEdgeColumn}
      {triangleArago}
      <Points id={id} />
    </div>
  );
};

export default Map_block;
