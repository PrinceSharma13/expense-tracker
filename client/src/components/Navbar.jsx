import { useState } from "react";
import AddTransactionModal from "./AddTransactionModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center px-6 py-4 bg-[#1e293b] shadow-md">

        <h1 className="text-xl font-bold text-blue-400">
          Expense Tracker
        </h1>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>

          <div className="w-8 h-8 rounded-full bg-gray-500"></div>
        </div>

      </div>

      <AddTransactionModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;