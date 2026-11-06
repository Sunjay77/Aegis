import type { Expense } from "../../types/expense";

type Props = {
  expenses: Expense[];
  deleteExpense: (id: number) => void;
};

function ExpenseList({ expenses, deleteExpense }: Props) {
  return (
    <div className="h-100 w-auto p-5">
      <h2 className="mb-2 text-2xl text-gray-800">Expenses List</h2>

      {expenses.length === 0 ? (
        <p className="m-0 text-sm text-gray-400">No expenses added yet</p>
      ) : (
        expenses.map((expense) => (
          <div
            key={expense.id}
            className="mb-2 mt-5 flex items-center justify-between gap-5 rounded-lg bg-gray-50 p-2.5"
          >
            <div className="flex flex-1 flex-col items-start">
              <p className="font-bold capitalize text-gray-800">
                {expense.description}
              </p>

              <p className="text-xs text-gray-400">
                {expense.category} - {expense.date}
              </p>
            </div>

            <span className="font-bold text-gray-800">Rs.{expense.amount}</span>

            <button
              className="w-auto rounded-lg border-0 bg-gray-800 px-3 py-2 text-sm text-white hover:cursor-pointer hover:bg-gray-600"
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
