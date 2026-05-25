import type { Expense } from "../../types/expense";

type Props = {
  expenses: Expense[];
  deleteExpense:(id: number) => void
}

function ExpenseList({ expenses, deleteExpense }: Props) {
  return (
    <div className="expenses-container">
      <h2>Expenses List</h2>

      {expenses.length === 0 ? (
        <p className="empty-text">No expenses added yet</p>
      ) : (
        expenses.map((expense) => (
          <div key={expense.id} className="expense-item">
            <div className="expense-info">
              <p className="expense-description">{expense.description}</p>

              <p className="expense-meta">
                {expense.category} - {expense.date}
              </p>
            </div>

            <span className="expense-amount">₹{expense.amount}</span>

            <button
              className="delete-btn"
              onClick={() => deleteExpense(expense.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;