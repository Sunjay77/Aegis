import { useState } from "react";
import type { Expense } from "../../types/expense";

type Props = {
  addExpense: (expense: Expense) => void;
};

function ExpenseForm({ addExpense }: Props) {
  const [amount, setAmount] = useState<string>("");

  const [description, setDescription] = useState("");

  const [category, setCategory] = useState("Food");

  const handleAddExpense = () => {
    if (!amount || !description) {
      console.log("Please fill in all fields!");

      return;
    }

    const newExpense = {
      id: Date.now(),
      amount,
      description,
      category,
      date: new Date().toLocaleDateString(),
    };

    addExpense(newExpense);

    setAmount("");
    setDescription("");
    setCategory("Food");
  };

  return (
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

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
  );
}

export default ExpenseForm;
