import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";

const PieChartComponent = () => {
  const { transactions } = useContext(ExpenseContext);

  // 🔥 Group expenses by category
  const categoryData = {};

  transactions.forEach((tx) => {
    if (tx.type === "expense") {
      if (!categoryData[tx.category]) {
        categoryData[tx.category] = 0;
      }
      categoryData[tx.category] += tx.amount;
    }
  });

  const data = Object.keys(categoryData).map((key) => ({
    name: key,
    value: categoryData[key],
  }));

  const COLORS = [
    "#22c55e",
    "#ef4444",
    "#3b82f6",
    "#facc15",
    "#a855f7",
    "#14b8a6",
  ];

  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl h-[300px]">
      <h2 className="mb-4 font-semibold">Expenses by Category</h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={80}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;