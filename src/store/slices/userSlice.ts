import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProducts } from "../../view/components/constants";

const initialState: UserProducts[] = [];

const userSlice = createSlice({
  name: "userproducts",
  initialState,
  reducers: {
    addUserProduct: (user, action: PayloadAction<UserProducts>) => {
      user.push({
        category: action.payload.category,
        description: action.payload.description,
        id: action.payload.id,
        image: action.payload.image,
        price: action.payload.price,
        rating: action.payload.rating,
        title: action.payload.title,
        size: action.payload.size,
        color: action.payload.color,
      });
    },
  },
});

export const { addUserProduct } = userSlice.actions;
export default userSlice.reducer;
