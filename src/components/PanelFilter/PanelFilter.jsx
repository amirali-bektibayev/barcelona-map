import React, { useState } from "react";
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
  const [typeValue, setTypeValue] = useState("");
  const [minStars, setMinStars] = useState(0);
  const [maxStars, setMaxStars] = useState(5);

  if (minStars > maxStars) {
    if (minStars == 5) {
      setMaxStars(5);
    }
    setMaxStars(minStars + 1);
  }

  const types = [...new Set(["all", ...ALL_POINTS.map((n) => n.type)])];
  const typesOptions = types.map((type, i) => {
    const selectedAll = (type) => {
      if (type == "all") {
        return true;
      }
    };

    return (
      <MenuItem selected={selectedAll(type)} value={type} key={i}>
        {type}
      </MenuItem>
    );
  });

  const typeValueHandle = (event) => {
    return event ? setTypeValue(event.target.value) : setTypeValue("all");
  };

  const formHandle = (e) => {
    e.preventDefault();

    if (typeValue) {
      filterHandle(all, minStars, maxStars);
    } else {
      filterHandle(typeValue, minStars, maxStars);
    }
    console.log(typeValue, minStars, maxStars);
  };

  const all = "all";

  return (
    <div className="panel-filter">
      <FormControl sx={{ width: "100%", margin: "20px 0" }}>
        <InputLabel id="type-select-label">Type</InputLabel>
        <Select
          labelId="type-select-label"
          id="type-select"
          label="Type"
          value={typeValue ? typeValue : all}
          onChange={typeValueHandle}
        >
          {typesOptions}
        </Select>
        <Typography component="legend">Rating</Typography>
        <Typography component="legend">Minimum stars</Typography>
        <div className="panel-rating-wrapper">
          <Rating
            name="simple-controlled"
            value={minStars}
            onChange={(event, newValue) => {
              setMinStars(newValue);
            }}
          />
        </div>
        <Typography component="legend">Maximum stars</Typography>
        <div className="panel-rating-wrapper">
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
