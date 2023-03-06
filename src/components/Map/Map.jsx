import React, { useState } from "react";
import "./Map.style.css";
import { MAP_BLOCK } from "../../data/map_block";
import Map_block from "../Map_block/Map_block";
import Map_filter from "../Map_filter/Map_filter";

const Map = () => {
  const [checkBoxArr, setCheckBoxArr] = useState();

  const map_blocks = MAP_BLOCK.map((block) => (
    <Map_block
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
    console.log(arr);

    setCheckBoxArr(arr);
  };

  return (
    <div>
      <div className="map">{map_blocks}</div>
      <div className="map-filter">
        <Map_filter checkboxValues={checkboxValues} />
      </div>
    </div>
  );
};

export default Map;
