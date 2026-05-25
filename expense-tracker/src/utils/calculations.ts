import type {Expense} from "../types/expense"

export const GetTotalSpending = (expenses: Expense[]) => expenses.reduce(
  (sum, expense) => sum + parseFloat(expense.amount),
  0,
);

export const GetCategorySpending = (expenses: Expense[]) => expenses.reduce(
  (acc, expense) => {
    const key = expense.category;
    acc[key] = (acc[key] || 0) + parseFloat(expense.amount);
    return acc;
  },
  {} as Record<string, number>,
);
