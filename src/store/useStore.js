import { create } from "zustand";
import { transactions as mockData } from "../data/mockTransactions";

export const useStore = create((set) => ({
  transactions: mockData,

  role: "admin", // default

  setRole: (newRole) => set({ role: newRole }), // ✅ IMPORTANT

  addTransaction: (txn) =>
    set((state) => ({
      transactions: [...state.transactions, txn],
    })),
}));