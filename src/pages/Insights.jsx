import { transactions } from "../data/mockTransactions";
import InsightCard from "../components/insights/InsightCard";

const Insights = () => {
  // Highest spending category
  const expenseTxns = transactions.filter(t => t.type === "expense");

  const categoryMap = {};
  expenseTxns.forEach((t) => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + t.amount;
  });

  const topCategory = Object.keys(categoryMap).reduce((a, b) =>
    categoryMap[a] > categoryMap[b] ? a : b
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Insights</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InsightCard title="Top Spending Category" value={topCategory} />
        <InsightCard title="Total Transactions" value={transactions.length} />
        <InsightCard title="Expenses Count" value={expenseTxns.length} />
      </div>
    </div>
  );
};

export default Insights;