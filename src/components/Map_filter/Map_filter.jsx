import React, { useEffect, useState } from "react";
import "./Map_filter.style.css";
import { ALL_POINTS } from "../../data/points/all_points";
import useCheckBox from "../../hooks/useCheckBox";

const Map_filter = ({ checkboxValues }) => {
  const { filters, filteredTypes, onFilterChange } = useCheckBox();

  const filteredItems = ALL_POINTS.filter((n) =>
    filteredTypes.includes(n.type)
  );

  const Filter = ({ value, active, onChange }) => (
    <label className="filter">
      <input
        type="checkbox"
        checked={active}
        data-value={value}
        onChange={onChange}
      />
      {value}
    </label>
  );

  const sendArr = () => {
    checkboxValues(filteredItems);
  };

  return (
    <div className="map-filter">
      <div className="map-filter-title">Map filter</div>
      <div className="map-filter-checkbox">
        {filters.map((n) => (
          <Filter key={n.id} {...n} onChange={onFilterChange} />
        ))}
      </div>
      <button className="map-filter-btn" onClick={sendArr}>
        Search
      </button>
    </div>
  );

  // const [checkedTapas, setCheckedTapas] = useState(true);
  // const [checkedCafe, setCheckedCafe] = useState(true);
  // const [checkedBar, setCheckedBar] = useState(true);

  // const checkBoxHandle = (e) => {
  //   e.preventDefault();
  //   checkboxValues(checkedTapas, checkedCafe, checkedBar);
  // };

  // return (
  //   <form onSubmit={checkBoxHandle}>
  //     <div>
  //       <input
  //         checked={checkedTapas}
  //         onChange={() => setCheckedTapas(!checkedTapas)}
  //         type="checkbox"
  //       />
  //       <label>tapas</label>
  //     </div>
  //     <div>
  //       <input
  //         checked={checkedCafe}
  //         onChange={() => setCheckedCafe(!checkedCafe)}
  //         type="checkbox"
  //       />
  //       <label>cafe</label>
  //     </div>
  //     <div>
  //       <input
  //         checked={checkedBar}
  //         onChange={() => setCheckedBar(!checkedBar)}
  //         type="checkbox"
  //       />
  //       <label>Bar</label>
  //     </div>
  //     <button type="submit">Filter</button>
  //   </form>
  // );
};

export default Map_filter;
