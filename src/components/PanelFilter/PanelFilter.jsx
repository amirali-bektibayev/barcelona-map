import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const PanelFilter = ({ filterHandle }) => {
  const [typeValue, setTypeValue] = useState("");

  const types = ["all", "cafe", "tapas", "bar", "shop", "pizza", "burger"];
  const typesOptions = types.map((type, i) => {
    return (
      <MenuItem value={type} key={i}>
        {type}
      </MenuItem>
    );
  });

  const typeValueHandle = (event) => {
    return setTypeValue(event.target.value);
  };

  const formHandle = (e) => {
    e.preventDefault();
    filterHandle(typeValue);
  };

  return (
    <div className="panel-filter">
      <FormControl sx={{ width: "100%", margin: "20px 0" }}>
        <InputLabel id="type-select-label">Type</InputLabel>
        <Select
          labelId="type-select-label"
          id="type-select"
          label="Type"
          value={typeValue}
          onChange={typeValueHandle}
        >
          {typesOptions}
        </Select>

        <Button
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
