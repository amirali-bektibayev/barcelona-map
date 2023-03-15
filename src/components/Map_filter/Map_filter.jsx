import React, { useEffect, useState } from "react";
import "./Map_filter.style.css";
import { ALL_POINTS } from "../../data/points/all_points";

const Map_filter = ({ checkboxValues }) => {
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
    <>
      <div>Map filter</div>
      <div>
        {filters.map((n) => (
          <Filter key={n.id} {...n} onChange={onFilterChange} />
        ))}
      </div>
      <button onClick={sendArr}>Search</button>
    </>
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
