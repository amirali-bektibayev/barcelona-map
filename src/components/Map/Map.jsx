import React, { useState } from "react";
import "./Map.style.css";
import { MAP_BLOCK } from "../../data/map_block";
import Map_block from "../Map_block/Map_block";
import Map_filter from "../Map_filter/Map_filter";
import { useSelector } from "react-redux";

const Map = () => {
  const [checkBoxArr, setCheckBoxArr] = useState();

  const clickedArr = useSelector((state) => state.clickedPoints.points);

  const newSetClickerArr = new Set(clickedArr);
  const clicked_block = Array.from(newSetClickerArr).map((clickedPoint) => {
    return <div>{clickedPoint.name}</div>;
  });

  const map_blocks = MAP_BLOCK.map((block) => (
    <Map_block
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

  // const clicked_block = clickedArr.map((point) => {
  //   console.log(clickedArr);
  //   return <div></div>;
  // });

  const checkboxValues = (arr) => {
    setCheckBoxArr(arr);
  };

  return (
    <div className="map-wrapper">
      <div className="map">{map_blocks}</div>
      <div className="map-right">
        <Map_filter checkboxValues={checkboxValues} />
        <div className="map-clicked-list">
          <div className="map-clicked-list-title">
            Clicked points from Panel
          </div>
          {clicked_block}
        </div>
      </div>
    </div>
  );
};

export default Map;
