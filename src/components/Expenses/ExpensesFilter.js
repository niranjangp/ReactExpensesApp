import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const handleSelect = (event) => {
    const selectedYearVal = event.target.value;
    props.onReceiveSelect(selectedYearVal);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={handleSelect} value={props.selectVal}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
