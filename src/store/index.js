import { configureStore } from '@reduxjs/toolkit';
import formReducer, { changeCost, changeName } from './slices/formSlice';
import carsReducer, {
  addCar,
  changeSearchTerm,
  removeCar,
} from './slices/carsSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    carsReducer: carsReducer,
  },
});

export { changeName, changeCost, changeSearchTerm, addCar, removeCar };
