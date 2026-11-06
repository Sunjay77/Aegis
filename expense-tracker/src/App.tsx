import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { useExpenses } from "./hooks/useExpenses";
import { GetCategorySpending, GetTotalSpending } from "./utils/calculations";
import SummaryCard from "./components/Summary/SummaryList";
import { ExpenseForm, ExpenseList, Navbar } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<ExpenseTracker />} />
    </Routes>
  );
}

function ExpenseTracker() {
  const { expenses, addExpense, deleteExpense } = useExpenses();
  const totalSpending = GetTotalSpending(expenses);
  const categorySpending = GetCategorySpending(expenses);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-100 p-4">
      <Navbar total={totalSpending} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <SummaryCard categorySpending={categorySpending} />
    </div>
  );
}

export default App;
