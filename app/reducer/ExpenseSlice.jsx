const { createSlice } = require("@reduxjs/toolkit");

const ExpenseSlice = createSlice({
  name: "expenses",
  initialState: {},
  reducers: {},
});

export default ExpenseSlice;
export const expenseActions = ExpenseSlice.actions;
