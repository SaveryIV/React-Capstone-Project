import { configureStore } from '@reduxjs/toolkit';
import heroesReducer from './Heroes/heroesSlice';

const store = configureStore({
  reducer: {
    heroes: heroesReducer,
  },
});

export default store;
