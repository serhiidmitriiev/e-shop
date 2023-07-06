import { createSelector } from "@reduxjs/toolkit";

import { Products } from "../../view/components/constants";
import { RootState } from "../store";

export const selectProducts = (state: RootState) => state.products.products;

export const selectStatus = createSelector(
  (state: any) => state.status,
  (status) => status,
);

export const selectMenProducts = createSelector(selectProducts, (products) =>
  products.filter((item: Products) => item.category === "men's clothing"),
);

export const selectWomenProducts = createSelector(selectProducts, (products) =>
  products.filter((item: Products) => item.category === "women's clothing"),
);
export const selectKidsProducts = createSelector(selectProducts, (products) =>
  products.filter(
    (item: Products) =>
      item.category === "jewelry" || item.category === "electronics",
  ),
);
