import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/productSlice";
import userProductsReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    userproducts: userProductsReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
