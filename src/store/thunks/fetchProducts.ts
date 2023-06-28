import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../view/components/constants";

export const fetchProducts = createAsyncThunk(
  "products/productFetch",
  async () => {
    const response = await fetch(URL);
    return response.json();
  }
);

export const fetchSingleProduct = (id: string | undefined) =>
  createAsyncThunk("products/singleProductFetch", async () => {
    const response = await fetch(`${URL}/${id}`);
    return response.json();
  });
