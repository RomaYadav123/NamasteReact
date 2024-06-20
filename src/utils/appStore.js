import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //each slice will have its own reducer //

  // this is the big reducer for our whole app that will contain small reducers from different slices//
  
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
