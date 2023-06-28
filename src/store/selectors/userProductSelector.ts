import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectUserProduct = (state: RootState) => state.userproducts;
