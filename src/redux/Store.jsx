import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/RocketsSlice';

const store = configureStore({
  reducer: { rocketsSlice },
});

export default store;