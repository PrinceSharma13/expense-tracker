import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const AddTransactionModal = ({ isOpen, onClose }) => {
  const { addTransaction } = useContext(ExpenseContext);

  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "expense",
    date: "",
    category: "Food",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔴 Validation
    if (!form.title || !form.amount || !form.date) {
      setError("Please fill all fields");
      return;
    }

    if (Number(form.amount) <= 0) {
      setError("Amount must be greater than 0");
      return;
    }

    // ✅ Add transaction
    addTransaction({
      ...form,
      id: Date.now(),
      amount: Number(form.amount),
    });

    // ✅ Reset form
    setForm({
      title: "",
      amount: "",
      type: "expense",
      date: "",
      description: "",
      category: "Food",
    });

    setError("");
    onClose();
  };

  if (!isOpen) return null;

  const categories = [
    "Food",
    "Groceries",
    "Transport",
    "Fuel",
    "Rent",
    "Bills",
    "Shopping",
    "Entertainment",
    "Travel",
    "Health",
    "Education",
    "Salary",
    "Investment",
    "Misc",
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-[#1e293b] p-6 rounded-2xl w-[350px] space-y-4 z-50">
        <h2 className="text-lg font-semibold">Add Transaction</h2>

        {/* 🔴 Error Message */}
        {error && <p className="text-red-400 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#0f172a] outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="description"
            placeholder="Description (optional)"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#0f172a] outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#0f172a] outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#0f172a]"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#0f172a]"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#0f172a]"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 py-2 rounded hover:bg-blue-600 transition"
          >
            Add Transaction
          </button>
        </form>

        <button
          onClick={onClose}
          className="text-sm text-gray-400 hover:text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTransactionModal;
