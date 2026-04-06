import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Food", value: 1200 },
  { name: "Shopping", value: 800 },
  { name: "Bills", value: 600 },
];

const COLORS = ["#ef4444", "#f59e0b", "#3b82f6"];

const ExpensePieChart = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow mt-6">
      <h2 className="mb-4 font-semibold">Expenses Breakdown</h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={80}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpensePieChart;