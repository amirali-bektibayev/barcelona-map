import React, { useState } from "react";
import "./Map.style.css";
import { MAP_BLOCK } from "../../data/map_block";
import MapBlock from "../MapBlock/MapBlock";
import MapFilter from "../MapFilter/MapFilter";

const Map = () => {
  const [checkBoxArr, setCheckBoxArr] = useState();

  const map_blocks = MAP_BLOCK.map((block) => (
    <MapBlock
      key={block.id}
      id={block.id}
      street_column={block.street_column}
      street_row={block.street_row}
      street_edge={block.street_edge}
      display={block.display}
      pseudo={block.pseudo}
      checkBoxArr={checkBoxArr}
    />
  ));

  const checkboxValues = (arr) => {
    setCheckBoxArr(arr);
  };

  return (
    <div className="map-wrapper">
      <div className="map">{map_blocks}</div>
      <div className="map-right">
        <MapFilter checkboxValues={checkboxValues} />
      </div>
    </div>
  );
};

export default Map;
