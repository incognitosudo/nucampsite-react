import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsitesSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
  },
});

console.log(store.getState());