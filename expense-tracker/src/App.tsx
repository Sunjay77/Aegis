import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
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
    </div>
  );
}

export default App;