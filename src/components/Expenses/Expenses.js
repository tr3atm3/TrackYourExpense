import Card from "../UI/Card";
import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    // console.log("Expenses" + selectedYear);
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
      {filteredExpenses.length === 1 && (
        <p style={{ color: "white" }}>
          Only single Expense here. Please add more...
        </p>
      )}
    </Card>
  );
};

export default Expenses;
