import React from "react";
import "./ExpensesFilter.css";
const ExpensesFilter = (props) => {
  const optionChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <label>Filter By Year</label>
      <select value={props.selected} onChange={optionChangeHandler}>
        <option value={2022}>2022</option>
        <option value={2021}>2021</option>
        <option value={2020}>2020</option>
        <option value={2019}>2019</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
