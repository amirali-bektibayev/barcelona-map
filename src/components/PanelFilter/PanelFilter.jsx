import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "./PanelFilter.style.css";
import { ALL_POINTS } from "../../data/points/all_points";

const PanelFilter = ({ filterHandle }) => {
  const [minStars, setMinStars] = useState(0);
  const [maxStars, setMaxStars] = useState(5);

  if (minStars > maxStars) {
    if (minStars == 5) {
      setMaxStars(5);
    }
    setMaxStars(minStars + 1);
  }

  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const filterValues = [
      ...new Set(["all", ...ALL_POINTS.map((n) => n.type)]),
    ];
    setFilters(
      filterValues.map((n, i) => ({ active: false, value: n, id: i + 1 }))
    );
  }, [ALL_POINTS]);

  const onFilterChange = ({
    target: {
      checked: active,
      dataset: { value },
    },
  }) => {
    const newFilters = filters.map((n) =>
        [n.value, "all"].includes(value) ? { ...n, active } : n
      ),
      isAll = newFilters
        .filter((n) => n.value !== "all")
        .every((n) => n.active);

    newFilters.find((n) => n.value === "all").active = isAll;

    setFilters(newFilters);
  };

  const filteredTypes = filters.filter((n) => n.active).map((n) => n.value);
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
      <FormControl sx={{ width: "100%", margin: "20px 0" }}>
        {/* <InputLabel id="type-select-label">Type</InputLabel>
        <Select
          labelId="type-select-label"
          id="type-select"
          label="Type"
          value={typeValue ? typeValue : all}
          onChange={typeValueHandle}
        >
          {typesOptions}
        </Select> */}
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

        <Button
          sx={{ width: "200px", margin: "20px auto" }}
          variant="contained"
          className="panel-filter-submit"
          type="submit"
          onClick={formHandle}
        >
          Search
        </Button>
      </FormControl>
    </div>
  );
};

export default PanelFilter;
