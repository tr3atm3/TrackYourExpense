import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("Clicked");
  };
  const deleteHandler = (e) => {
    e.target.parentElement.style.display = "none";
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        locationOfExpenditure={props.locationOfExpenditure}
        title={props.title}
      />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete Expense</button>
    </Card>
  );
};

export default ExpenseItem;
