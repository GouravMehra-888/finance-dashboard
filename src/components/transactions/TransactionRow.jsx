const TransactionRow = ({ txn }) => {
  return (
    <tr className="border-b">
      <td className="p-3">{txn.date}</td>
      <td className="p-3">{txn.category}</td>
      <td className="p-3">
        ₹{txn.amount}
      </td>
      <td className={`p-3 ${txn.type === "income" ? "text-green-600" : "text-red-600"}`}>
        {txn.type}
      </td>
    </tr>
  );
};

export default TransactionRow;