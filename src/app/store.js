// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './../features/basket/ basketSlice';
import productsReducer from './../features/products/productSlice';
import uiReducer from "./../features/uiSlice/uiSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    products: productsReducer,
    ui:uiReducer
  },
});
