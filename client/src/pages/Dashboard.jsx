import Navbar from "../components/Navbar";
import BalanceCard from "../components/BalanceCard";
import TransactionList from "../components/TransactionList";
import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import PieChartComponent from "../components/charts/PieChartComponent";
import BarChartComponent from "../components/charts/BarChartComponent";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { transactions, selectedCategory, setSelectedCategory } =
    useContext(ExpenseContext);

  // ✅ Filter transactions FIRST
  const filteredTransactions = selectedCategory
    ? transactions.filter((tx) => tx.category === selectedCategory)
    : transactions;

  // ✅ Then calculate
  const income = filteredTransactions
    .filter((tx) => tx.type === "income")
    .reduce((acc, tx) => acc + tx.amount, 0);

  const expense = filteredTransactions
    .filter((tx) => tx.type === "expense")
    .reduce((acc, tx) => acc + tx.amount, 0);

  const balance = income - expense;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      <div className="p-6 space-y-6">
        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BalanceCard
            title="Total Balance"
            amount={balance}
            color="text-blue-400"
          />
          <BalanceCard title="Income" amount={income} color="text-green-400" />
          <BalanceCard title="Expense" amount={expense} color="text-red-400" />
        </div>

        {/* Transactions */}
        <TransactionList />

        {/* Reset Button */}
        {selectedCategory && (
          <button
            onClick={() => setSelectedCategory(null)}
            className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Reset Filter
          </button>
        )}

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PieChartComponent data={filteredTransactions} />
          <BarChartComponent data={filteredTransactions} />
          console.log(data);
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
