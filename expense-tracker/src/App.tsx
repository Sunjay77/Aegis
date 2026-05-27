import "./App.css";
import { GetTotalSpending, GetCategorySpending } from "./utils/calculations.ts";
import { useExpenses } from "./hooks/useExpenses.ts";
import SummaryCard from "./components/Summary/SummaryList.tsx";
import { ExpenseForm, ExpenseList, Navbar } from "./components/index.ts";
function App() {
  
  const { expenses, addExpense, deleteExpense } = useExpenses();
  const totalSpending = GetTotalSpending(expenses);
  const categorySpending = GetCategorySpending(expenses);

  return (
    <div className="app">
      <Navbar total={totalSpending} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <SummaryCard categorySpending={categorySpending} />
    </div>
  );
}

export default App;
