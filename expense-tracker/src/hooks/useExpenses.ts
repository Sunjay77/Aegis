import { useEffect, useState } from "react";
import type { Expense } from "../types/expense";

export function useExpenses() {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  const deleteExpense = (id: number) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  return {
    expenses,
    addExpense,
    deleteExpense,
  };
}
