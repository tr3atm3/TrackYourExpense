import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setShowForm(false);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };
  const handleAddButton = (e) => {
    e.preventDefault();
    setShowForm(true);
  };
  const handleCancelButton = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  if (showForm) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label for="title">Title</label>
            <input
              type="text"
              id="title"
              onChange={titleChangeHandler}
              value={enteredTitle}
            ></input>
          </div>
          <div className="new-expense__control">
            <label for="amount">Amount</label>
            <input
              type="number"
              id="amount"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
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
              value={enteredDate}
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={handleCancelButton}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  } else {
    return <button onClick={handleAddButton}>Add More Expenses</button>;
  }
};

export default ExpenseForm;
