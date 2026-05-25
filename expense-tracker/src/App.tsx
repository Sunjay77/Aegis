import { useState } from "react";
import "./App.css";
import type { Expense } from "./types/expense.ts";
import { GetTotalSpending, GetCategorySpending } from "./utils/calculations.ts";
import { useExpenses } from "./hooks/useExpenses.ts";

function App() {
  const [amount, setAmount] = useState<string>("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Food");
  const { expenses, addExpense, deleteExpense } = useExpenses();
  const totalSpending = GetTotalSpending(expenses);
  const categorySpending = GetCategorySpending(expenses);
  // Save to localStorage whenever expenses change

  const handleAddExpense = () => {
    if (!amount || !description) {
      console.log("Please fill in all fields!");
      return;
    }

    const newExpense = {
      id: Date.now(),
      amount: amount,
      description: description,
      category: category,
      date: new Date().toLocaleDateString(),
    };
    addExpense(newExpense);
    console.log("Expense added:", newExpense);

    //Clear the form
    setAmount("");
    setDescription("");
    setCategory("Food");
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">
          <h1>Aegis</h1>
        </div>
        <div className="nav-total">
          <span className="total-display">
            Total Spending: Rs {totalSpending.toFixed(2)}
          </span>
        </div>
      </nav>
      <div className="form-container">
        <div className="form-row">
          <input
            type="number"
            placeholder="Enter expense amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter expense description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Utilities">Utilities</option>
          </select>
        </div>
        <button className="btnExpense" onClick={handleAddExpense}>
          Add Expense
        </button>
      </div>
      <div className="expenses-container">
        <h2>Expenses List</h2>
        {expenses.length === 0 ? (
          <p className="empty-text">No expenses added yet</p>
        ) : (
          expenses.map((expense: Expense) => (
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
                onClick={() => {
                  deleteExpense(expense.id);
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
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
                  <span className="category-amount">
                    ₹{(amount as number).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
