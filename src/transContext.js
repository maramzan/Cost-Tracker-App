import React, { createContext, useReducer } from "react";
import TransactionReducer from "./transactionReducer";
const initialTransactions = [];

export const TransactionContext = createContext(initialTransactions);

export const TransactinProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

  function addTransaction(transObj) {
    dispatch({
      type: "ADD",
      payload: { text: transObj.text, amount: transObj.amount },
    });
  }
  function deleteTransactoin(entryId) {
    dispatch({
      type: "DELETE",
      payload: entryId,
    });
  }

  return (
    <TransactionContext.Provider
      value={{ transactions: state, addTransaction, deleteTransactoin }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
