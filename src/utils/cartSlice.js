import { createSlice } from "@reduxjs/toolkit";

//this is the slice -- cartSlice//
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state, action) => {
      state.item.pop();
    },
    clearCart: (state) => {
      state.item.length = 0;
    },
  },
});

//exporting all the actions here //
export const { addItem, removeItem, clearCart } = cartSlice.actions;

//exporting the reducer here//
export default cartSlice.reducer;
