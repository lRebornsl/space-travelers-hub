import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './Rockets/rocketsSlice';
import missionsReducer from './Missions/missionsSlice';

const store = configureStore({
  reducer: { 
    rocketsSlice,
    missions: missionsReducer,
  },
});

export default store;