zzzimport { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { campsitesReducer } from '../features/campsitesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
