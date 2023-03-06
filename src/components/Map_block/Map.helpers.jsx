export const streetColumn = (street_column) =>
  street_column ? (
    <div className="map_block-street-column">{street_column}</div>
  ) : (
    ""
  );

export const streetRow = (street_row) =>
  street_row ? <div className="map_block-street-row">{street_row}</div> : "";

export const streetEdgeRow = (street_edge, id) =>
  street_edge && id == 4 ? (
    <div className="map_block-street-edge-row">{street_edge}</div>
  ) : (
    ""
  );

export const streetEdgeColumn = (street_edge, id) =>
  street_edge && id == 22 ? (
    <div className="map_block-street-edge-column">{street_edge}</div>
  ) : (
    ""
  );

export const triangleArago = (pseudo) =>
  pseudo ? <div className="triangle_wrapper"></div> : "";
