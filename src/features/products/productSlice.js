import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../assets/products.json"

const initialState = {
  products: productsData,
  currentIndexes: productsData.map(() => 0),
  currentPage: 0,
  itemsPerPage: 8,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setImageIndex(state, action) {
      const { productIndex, imageIndex } = action.payload;
      state.currentIndexes[productIndex] = imageIndex;
    },
  },
});

export const { setCurrentPage, setImageIndex } = productsSlice.actions;
export default productsSlice.reducer;
