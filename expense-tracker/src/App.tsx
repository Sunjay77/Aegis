import { useState } from "react";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState<any[]>([]);

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <p>Ready to start tracking expenses</p>
    </div>
  );
}

export default App;
