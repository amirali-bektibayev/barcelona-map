import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import "./PanelFilter.style.css";
import { ALL_POINTS } from "../../data/points/all_points";
import useCheckBox from "../../hooks/useCheckBox";

const PanelFilter = ({ filterHandle }) => {
  const { filters, filteredTypes, onFilterChange } = useCheckBox();

  const [minStars, setMinStars] = useState(0);
  const [maxStars, setMaxStars] = useState(5);

  if (minStars > maxStars) {
    if (minStars == 5) {
      setMaxStars(5);
    }
    setMaxStars(minStars + 1);
  }

  const filteredItems = ALL_POINTS.filter(
    (n) =>
      filteredTypes.includes(n.type) &&
      n.rating >= minStars &&
      n.rating <= maxStars
  );

  const Filter = ({ value, active, onChange }) => (
    <div className="panel-filter-category-input-wrapper">
      <input
        id={value}
        name={value}
        type="checkbox"
        checked={active}
        data-value={value}
        onChange={onChange}
      />

      <label for={value} className="panel-filter-category-label">
        {value}
      </label>
    </div>
  );

  const formHandle = (e) => {
    e.preventDefault();
    filterHandle(filteredItems);
  };

  return (
    <div className="panel-filter">
      <form className="panel-filter-form" onSubmit={formHandle}>
        <div className="panel-filter-h2">Categories</div>
        <div className="panel-filter-category">
          {filters.map((n) => (
            <Filter key={n.id} {...n} onChange={onFilterChange} />
          ))}
        </div>
        <div className="panel-filter-h2">Rating</div>
        <div className="panel-rating-wrapper">
          <div className="panel-filter-h3">Minimum stars: </div>
          <Rating
            name="simple-controlled"
            value={minStars}
            onChange={(event, newValue) => {
              setMinStars(newValue);
            }}
          />
        </div>

        <div className="panel-rating-wrapper">
          <div className="panel-filter-h3">Maximum stars: </div>
          <Rating
            name="simple-controlled"
            value={maxStars}
            onChange={(event, newValue) => {
              setMaxStars(newValue);
            }}
          />
        </div>

        <button className="panel-filter-btn">Search</button>
      </form>
    </div>
  );
};

export default PanelFilter;
