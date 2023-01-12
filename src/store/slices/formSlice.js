import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '', cost: 0 };

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
});

export const { changeName, changeCost } = formSlice.actions;
export default formSlice.reducer;
