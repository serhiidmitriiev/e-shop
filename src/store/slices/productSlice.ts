import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Products, ProductsObject } from "../../view/components/constants";
import { fetchProducts } from "../thunks/fetchProducts";

const initialState: ProductsObject = {
  user: {
    category: "men's clothing",
    description: "What is this",
    id: 1001,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 1,
    rating: { rate: 3, count: 3 },
    title: "Don't buy this product",
  },
  products: [
    {
      category: "men's clothing",
      description: "It's an initial state",
      id: 1000,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 1,
      rating: { rate: 1, count: 120 },
      title: "What is this product all about",
    },
  ],
  status: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productFetched: (products, action: PayloadAction<Products>) => {
      products.products.push({
        category: action.payload.category,
        description: action.payload.description,
        id: action.payload.id,
        image: action.payload.image,
        price: action.payload.price,
        rating: action.payload.rating,
        title: action.payload.title,
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state: ProductsObject) => {
        return {
          ...state,
          status: "loading",
        };
      })
      .addCase(fetchProducts.fulfilled, (state: ProductsObject, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state: ProductsObject, action) => {
        return {
          ...state,
          status: "failed",
          error: action.error.message,
        };
      });
  },
});

export const { productFetched } = productSlice.actions;
export default productSlice.reducer;
