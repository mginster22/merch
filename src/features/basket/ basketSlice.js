// src/features/basket/basketSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // {product, selectedImage, selectedSize, uniqueId}
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter(item => item.uniqueId !== action.payload);
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;
