const { configureStore } = require("@reduxjs/toolkit");
const { default: ExpenseSlice } = require("../reducer/ExpenseSlice");

const Store = configureStore({
  reducer: {
    expense: ExpenseSlice.reducer,
  },
});

export default Store;
