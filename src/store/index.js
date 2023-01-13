import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/formSlice';
import carsReducer from './slices/carsSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export * from './slices/carsSlice';
export * from './slices/formSlice';
