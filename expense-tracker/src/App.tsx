import { useState, useEffect } from "react";
import "./App.css";

type Expense = {
  id: number;
  amount: string;
  description: string;
  category: string;
  date: string;
};

function App() {
  const [amount, setAmount] = useState<string>("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Food");
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? (JSON.parse(saved) as Expense[]) : [];
  });
  // Save to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = () => {
    if (!amount || !description) {
      console.log("Please fill in all fields!");
      return;
    }

    console.log("Button clicked!");
    console.log("Amount:", amount);
    console.log("Description:", description);
    console.log("Category:", category);

    const newExpense = {
      id: Date.now(),
      amount: amount,
      description: description,
      category: category,
      date: new Date().toLocaleDateString(),
    };
    setExpenses([newExpense, ...expenses]);
    console.log("Expense added:", newExpense);

    //Clear the form
    setAmount("");
    setDescription("");
    setCategory("Food");
  };
  const totalSpending = expenses.reduce(
    (sum, expense) => sum + parseFloat(expense.amount),
    0,
  );
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
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Utilities">Utilities</option>
        </select>
        <button onClick={handleAddExpense}>Add Expense</button>
        <h2>Total Spending: Rs {totalSpending.toFixed(2)}</h2>
        <h2>Expenses List</h2>
        {expenses.map((expense) => (
          <div key={expense.id}>
            <p>
              {expense.description} - Rs {expense.amount}({expense.category} -{" "}
              {expense.date})
            </p>
            <button
              onClick={() => {
                setExpenses(expenses.filter((e) => e.id !== expense.id));
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
