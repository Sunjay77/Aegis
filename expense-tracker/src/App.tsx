import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Food");
  const [expenses, setExpenses] = useState<any[]>([]);
  const handleAddExpense = () => {
    const newExpense = {
      id: Date.now(),
      amount,
      description,
      category
    };
    setExpenses([newExpense, ...expenses]);
    console.log('Expense added:', newExpense);
  };
  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <input
        type="number"
        placeholder="Enter expense amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
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
      <button onClick={handleAddExpense}>Add Expense</button>
      <h2>Expenses List</h2>
      {expenses.map(expense => (
        <div key={expense.id}>
          <p>{expense.description} - ${expense.amount}({expense.category})</p>
        </div>
      ))}
    </div>
  );
}

export default App;