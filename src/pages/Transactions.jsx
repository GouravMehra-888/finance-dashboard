import { useState } from "react";

import TransactionTable from "../components/transactions/TransactionTable";
import TransactionFilter from "../components/transactions/TransactionFilter";

import { useStore } from "../store/useStore";
import { exportToCSV } from "../utils/exportCSV"; // 

const Transactions = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const { transactions, addTransaction, role } = useStore();

  const handleAdd = () => {
  const newTxn = {
    id: Date.now(),
    date: "2026-04-05",
    amount: 1000,
    category: "Test",
    type: "expense",
  };

  addTransaction(newTxn);
};

  const filteredData = transactions.filter((txn) => {
    return (
      txn.category.toLowerCase().includes(search.toLowerCase()) &&
      (type === "" || txn.type === type)
    );
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 mb-4">

        {/* RBAC Button */}
        {role === "admin" && (
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Transaction
          </button>
     )}

        {/* CSV Export Button */}
        <button
          onClick={() => exportToCSV(filteredData)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Export CSV
        </button>

      </div>

      <TransactionFilter setSearch={setSearch} setType={setType} />

      <TransactionTable data={filteredData} />
    </div>
  );
};

export default Transactions;