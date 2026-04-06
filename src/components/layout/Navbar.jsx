import { useStore } from "../../store/useStore";

const Navbar = () => {
  const { role, setRole } = useStore();

  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h2 className="font-semibold">Finance Dashboard</h2>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default Navbar;