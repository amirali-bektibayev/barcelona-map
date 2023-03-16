import React, { useEffect, useState } from "react";
import { ALL_POINTS } from "../data/points/all_points";

const useCheckBox = () => {
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

  return {
    filters,
    filteredTypes,
    onFilterChange,
    Filter,
  };
};

export default useCheckBox;
