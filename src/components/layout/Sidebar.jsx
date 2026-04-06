import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-full p-6">
      <h1 className="text-2xl font-bold mb-10"> Finance</h1>

      <nav className="flex flex-col gap-5">
        <Link to="/" className="hover:text-gray-300">Dashboard</Link>
        <Link to="/transactions" className="hover:text-gray-300">Transactions</Link>
        <Link to="/insights" className="hover:text-gray-300">Insights</Link>
      </nav>
    </div>
  );
};

export default Sidebar;