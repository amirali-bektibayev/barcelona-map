import React from "react";
import "./Map.style.css";
import { MAP_BLOCK } from "../../data/map_block";
import Map_block from "../Map_block/Map_block";

const Map = () => {
  const map_blocks = MAP_BLOCK.map((block) => (
    <Map_block
      id={block.id}
      street_column={block.street_column}
      street_row={block.street_row}
      street_edge={block.street_edge}
      display={block.display}
      pseudo={block.pseudo}
    />
  ));

  return <div className="map">{map_blocks}</div>;
};

export default Map;
