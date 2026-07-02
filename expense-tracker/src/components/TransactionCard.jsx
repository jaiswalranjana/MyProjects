function TransactionCard({ expense, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 border border-gray-200 mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">
          {expense.category}
        </h3>

        <p className="text-xl font-bold text-indigo-600">
          ₹{expense.amount}
        </p>
      </div>

      {expense.description && (
        <p className="text-gray-600 italic mt-2">
    {expense.description}
      </p>
      )}

      <p className="text-sm text-gray-400 mt-3">
        {expense.date.toLocaleDateString()}
      </p>

      <div className="flex justify-end mt-4">
    <button
        onClick={() => onDelete(expense.id)}
        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
    >
        Delete
    </button>
</div>
    </div>
  );
}

export default TransactionCard;