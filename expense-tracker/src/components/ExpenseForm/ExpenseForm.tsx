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
    <div className="mb-3 flex flex-col justify-center gap-3 rounded-lg bg-white p-5">
      <div className="flex flex-col gap-3 md:flex-row">
        <input
          type="number"
          placeholder="Enter expense amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "Enter expense amount")}
          className="w-full flex-1 p-3 text-center text-sm"
        />

        <input
          type="text"
          placeholder="Enter expense description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onFocus={(e)=> (e.target.placeholder="")}
          onBlur={(e) => (e.target.placeholder = "Enter expense description")}
          className="w-full flex-1 p-3 text-center text-sm"
        />

        <select
          className="w-full flex-1 p-3 text-center text-sm"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Food">Food</option>

          <option value="Transportation">Transportation</option>

          <option value="Entertainment">Entertainment</option>

          <option value="Utilities">Utilities</option>
        </select>
      </div>

      <button
        className="w-full rounded-lg border-0 bg-gray-800 p-3 text-base font-bold text-white hover:cursor-pointer hover:bg-gray-700"
        onClick={handleAddExpense}
      >
        Add Expense
      </button>
    </div>
  );
}

export default ExpenseForm;
