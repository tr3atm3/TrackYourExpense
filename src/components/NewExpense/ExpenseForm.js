import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (e) => {
    // console.log(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // console.log(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: e.target.value };
    // });
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // console.log(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label for="title">Title</label>
          <input type="text" id="title" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label for="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label for="date">Date</label>
          <input
            type="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
