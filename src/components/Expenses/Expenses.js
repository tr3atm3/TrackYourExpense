import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    // console.log("Expenses" + selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses.map((item) => (
        <ExpenseItem
          key={expenses.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
          locationOfExpenditure={item.locationOfExpenditure}
        ></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;
