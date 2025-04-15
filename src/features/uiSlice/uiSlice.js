import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isBasketPopupVisible: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleBasketPopup: (state) => {
      state.isBasketPopupVisible = !state.isBasketPopupVisible;
    },
    closeBasketPopup: (state) => {
      state.isBasketPopupVisible = false;
    },
  },
});

export const { toggleBasketPopup, closeBasketPopup } = uiSlice.actions;
export default uiSlice.reducer;
