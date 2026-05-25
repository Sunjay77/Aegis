type Props = {
  categorySpending: Record<string, number>;
};

function SummaryCard({ categorySpending }: Props) {
  return (
    <div className="summary-container">
      <div className="summary-card">
        <h3>Spending by Category</h3>

        {Object.entries(categorySpending).length === 0 ? (
          <p className="empty-text">No expenses yet</p>
        ) : (
          <div className="category-list">
            {Object.entries(categorySpending).map(([cat, amount]) => (
              <div key={cat} className="category-item">
                <span className="category-name">{cat}</span>

                <span className="category-amount">₹{amount.toFixed(2)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SummaryCard;
