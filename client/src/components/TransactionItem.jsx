import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
const TransactionItem = ({ transaction }) => {
const { deleteTransaction } = useContext(ExpenseContext);
  return (
    <div className="flex justify-between items-center bg-[#1e293b] p-4 rounded-xl shadow hover:bg-[#273449] transition">

      {/* Left */}
      <div>
        <h3 className="font-semibold">{transaction.title}</h3>
        <p className="text-xs text-blue-400">
  {transaction.category}
</p>
        {transaction.description && (
      <p className="text-xs text-gray-400">
        {transaction.description}
      </p>
    )}
        <p className="text-sm text-gray-400">{transaction.date}</p>
      </div>

      {/* Right */}
      <p
        className={`font-bold ${
          transaction.type === "income"
            ? "text-green-400"
            : "text-red-400"
        }`}
      >
        ₹ {transaction.amount}
      </p>
      <div className="flex items-center gap-3">

  <p
    className={`font-bold ${
      transaction.type === "income"
        ? "text-green-400"
        : "text-red-400"
    }`}
  >
    ₹ {transaction.amount}
  </p>

  <button
    onClick={() => {
      const confirmDelete = window.confirm("Are you sure you want to delete this transaction?");
      if (confirmDelete) {
        deleteTransaction(transaction.id);
      }
    }}
    className="text-red-400 hover:text-red-600 text-lg"
  >
    🗑
  </button>

</div>
      
      

    </div>
  );
};

export default TransactionItem;