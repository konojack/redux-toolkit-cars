import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = { searchTerm: '', cars: [] };

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const updated = state.cars.filter(car => car.id !== action.payload);
      state.cars = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export default carsSlice.reducer;
