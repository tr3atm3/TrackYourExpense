import React from "react";

const ExpensesFilter = () => {
  return (
    <div className="expenses-filter">
      <label for="filter">Filter By Year</label>
      <select id="filter">
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
