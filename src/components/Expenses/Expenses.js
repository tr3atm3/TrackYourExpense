import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((item) => (
        <ExpenseItem
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
