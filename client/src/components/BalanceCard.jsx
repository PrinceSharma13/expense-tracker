import { motion } from "framer-motion";

const BalanceCard = ({ title, amount, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 200 }}
      className="bg-[#1e293b] p-6 rounded-2xl shadow-lg flex flex-col gap-2"
    >
      <h2 className="text-gray-400 text-sm">{title}</h2>

      <p className={`text-2xl font-bold ${color}`}>
  ₹ {amount.toLocaleString()}
</p>
    </motion.div>
  );
};

export default BalanceCard;