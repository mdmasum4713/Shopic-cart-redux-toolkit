import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/features/products/productSlice";
import cartReducer from "../redux/carts/cartsSlice"; // Make sure the import path is correct

const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
  },
});

export default store;
