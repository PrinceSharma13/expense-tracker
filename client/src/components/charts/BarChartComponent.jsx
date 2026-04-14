import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";

const BarChartComponent = () => {
  const { transactions } = useContext(ExpenseContext);

  const income = transactions
    .filter((tx) => tx.type === "income")
    .reduce((acc, tx) => acc + tx.amount, 0);

  const expense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((acc, tx) => acc + tx.amount, 0);

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl h-[300px]">
      <h2 className="mb-4 font-semibold">Income vs Expense</h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="value" fill="#035f87" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;