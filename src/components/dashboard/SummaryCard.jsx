import Skeleton from "../UI/Skeleton";

const SummaryCard = ({ title, amount, loading }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      
      <p className="text-gray-500">{title}</p>

      {loading ? (
        <Skeleton className="h-6 w-24 mt-2" />
      ) : (
        <h2 className="text-2xl font-bold mt-2">₹{amount}</h2>
      )}

    </div>
  );
};

export default SummaryCard;