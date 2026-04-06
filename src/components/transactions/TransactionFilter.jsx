const TransactionFilter = ({ setSearch, setType }) => {
  return (
    <div className="flex gap-4 mb-4">

      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded"
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border p-2 rounded"
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

    </div>
  );
};

export default TransactionFilter;