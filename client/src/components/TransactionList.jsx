import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const { transactions } = useContext(ExpenseContext);

  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl shadow space-y-4">

      {/* Title */}
      <h2 className="text-lg font-semibold">Recent Transactions</h2>

      {/* Empty State */}
      {transactions.length === 0 ? (
        <div className="text-center text-gray-400 py-10">
          <p className="text-lg">No transactions yet</p>
          <p className="text-sm">
            Start by adding your first expense 
          </p>
        </div>
      ) : (
        /* Transaction List */
        <div className="space-y-3">
          {transactions.map((tx) => (
            <TransactionItem key={tx.id} transaction={tx} />
          ))}
        </div>
      )}

    </div>
  );
};

export default TransactionList;