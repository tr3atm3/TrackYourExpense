import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import { useState } from "react";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const changeHandler = () => {
    setAmount("100$");
  };
  const clickHandler = () => {
    console.log("Clicked");
    setTitle("Updated");
  };
  const deleteHandler = (e) => {
    e.target.parentElement.style.display = "none";
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          amount={amount}
          locationOfExpenditure={props.locationOfExpenditure}
          title={title}
        />
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteHandler}>Delete Expense</button>
        <button onClick={changeHandler}>Change Amount</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
