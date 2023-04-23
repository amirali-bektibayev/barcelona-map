import React from "react";
import "./MapFilter.style.css";
import { ALL_POINTS } from "../../data/points/all_points";
import useCheckBox from "../../hooks/useCheckBox";

const MapFilter = ({ checkboxValues }) => {
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
};

export default MapFilter;
