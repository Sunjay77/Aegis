import "./App.css";
import { useState } from "react";
import { GetTotalSpending, GetCategorySpending } from "./utils/calculations.ts";
import { useExpenses } from "./hooks/useExpenses.ts";
import SummaryCard from "./components/Summary/SummaryList.tsx";
import { ExpenseForm, ExpenseList, Navbar } from "./components/index.ts";
import { LandingPage } from "./components/LandingPage.tsx";
function App() {
  const { expenses, addExpense, deleteExpense } = useExpenses();
  const totalSpending = GetTotalSpending(expenses);
  const categorySpending = GetCategorySpending(expenses);
  const [currentView, setCurrentView] = useState<"landing" | "app">("landing");

return currentView === "landing" ? (
  <LandingPage onGetStarted={() => setCurrentView("app")} />
) : (
  <div className="app">
    <Navbar total={totalSpending} />
    <ExpenseForm addExpense={addExpense} />
    <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    <SummaryCard categorySpending={categorySpending} />
  </div>
);
}

export default App;
