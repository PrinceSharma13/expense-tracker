import { createContext, useState, useEffect } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  
  // Load from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(data);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (tx) => {
    setTransactions((prev) => [...prev, tx]);
  };

  const deleteTransaction = (id) => {
  setTransactions((prev) => prev.filter((tx) => tx.id !== id));
};

  return (
    <ExpenseContext.Provider value={{ transactions, addTransaction, deleteTransaction }}>
      {children}
    </ExpenseContext.Provider>
  );
};