type Props = {
  categorySpending: Record<string, number>;
};

function SummaryCard({ categorySpending }: Props) {
  return (
    <div>
      <div className="rounded-lg bg-white p-3">
        <h3 className="capitalize text-gray-800">Spending by Category</h3>

        {Object.entries(categorySpending).length === 0 ? (
          <p className="m-0 text-sm text-gray-400">No expenses yet</p>
        ) : (
          <div className="flex flex-col gap-2">
            {Object.entries(categorySpending).map(([cat, amount]) => (
              <div
                key={cat}
                className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2"
              >
                <span className="capitalize text-gray-700">{cat}</span>

                <span className="font-bold text-gray-800">
                  RS.{amount.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SummaryCard;
