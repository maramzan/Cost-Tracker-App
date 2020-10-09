import React, { useContext, useState } from "react";
import { TransactionContext } from "./transContext";

const Child = () => {
  const { transactions, addTransaction, deleteTransactoin } = useContext(
    TransactionContext
  );
  const [newText, setNewText] = useState("");
  const [newAmount, setNewAmount] = useState(0);

  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) income += transactions[i].amount;
    }
    return income;
  };

  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) expense += transactions[i].amount;
    }
    return -expense;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newAmount === 0
      ? alert("Please enter the correct value")
      : addTransaction({ text: newText, amount: newAmount });
  };

  const handleDelete = (key) => {
    deleteTransactoin(key);
  };

  return (
    <div className="container">
      <h2 className="text-center">This is Expense Tracker</h2>
      <h4>your balance</h4>
      <h1>${getIncome() + getExpense()}</h1>
      <div className="expense-container">
        <div>
          <h4>income</h4>
          <p className="money plus">${getIncome()}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${getExpense()}</p>
        </div>
      </div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((item, key) => {
          return (
            <li key={key}>
              {item.text} <span>{item.amount}</span>
              <button
                onClick={() => handleDelete(item.id)}
                className="delete-btn"
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            required
            onChange={(e) => {
              setNewText(e.target.value);
            }}
            type="text"
            placeholder="Enter Text..."
          />
        </div>
        <div>
          <label htmlFor="amount">
            Amount <br />
            (negative - expenses , positive - income)
          </label>
          <input
            onChange={(e) => {
              setNewAmount(Number(e.target.value));
            }}
            type="number"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default Child;
