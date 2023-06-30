import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectUserProduct = (state: RootState) => state.userproducts;

export const selectUserProductAmount = (state: RootState) =>
  state.userproducts.map((item) => item.amount);
