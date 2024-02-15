import Expenses from "./components/Expenses/Expenses.js";
const App = () => {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 12),
      locationOfExpenditure: "Bangalore",
    },
    {
      title: "Rent",
      amount: 294.67,
      date: new Date(2021, 2, 2),
      locationOfExpenditure: "Bangalore",
    },
    {
      title: "Groceries",
      amount: 267,
      date: new Date(2021, 2, 20),
      locationOfExpenditure: "Bangalore",
    },
    {
      title: "Other",
      amount: 2700,
      date: new Date(2021, 2, 30),
      locationOfExpenditure: "Bangalore",
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
