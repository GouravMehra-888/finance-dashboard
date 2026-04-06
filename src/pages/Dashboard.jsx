import { useEffect, useState } from "react";
import BalanceChart from "../components/dashboard/BalanceChart";
import ExpensePieChart from "../components/dashboard/ExpensePieChart";
import SummaryCard from "../components/dashboard/SummaryCard";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  // Fake loading (simulate API)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard title="Total Balance" amount="45,000" loading={loading} />
        <SummaryCard title="Income" amount="20,000" loading={loading} />
        <SummaryCard title="Expenses" amount="15,000" loading={loading} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <BalanceChart />
  <ExpensePieChart />
</div>
    </div>
  );
};

export default Dashboard;