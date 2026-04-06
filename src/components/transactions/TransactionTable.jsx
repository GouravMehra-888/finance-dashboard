import TransactionRow from "./TransactionRow";

const TransactionTable = ({ data }) => {
  return (
    <table className="w-full bg-white rounded-xl shadow">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 text-left">Date</th>
          <th className="p-3 text-left">Category</th>
          <th className="p-3 text-left">Amount</th>
          <th className="p-3 text-left">Type</th>
        </tr>
      </thead>

      <tbody>
        {data.map((txn) => (
          <TransactionRow key={txn.id} txn={txn} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;