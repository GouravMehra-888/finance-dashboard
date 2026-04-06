import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", balance: 10000 },
  { month: "Feb", balance: 15000 },
  { month: "Mar", balance: 12000 },
  { month: "Apr", balance: 18000 },
];

const BalanceChart = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow mt-6">
      <h2 className="mb-4 font-semibold">Balance Trend</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;