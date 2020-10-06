import React, { createContext, useReducer } from "react";
import TransactionReducer from "./transactionReducer";
const initialTransactions = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 },
];

export const TransactionContext = createContext(initialTransactions);

export const TransactinProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

  function addTransaction(transObj) {
    dispatch({
      type: "ADD",
      payload: { text: transObj.text, amount: transObj.amount },
    });
  }

  return (
    <TransactionContext.Provider
      value={{ transactions: state, addTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
