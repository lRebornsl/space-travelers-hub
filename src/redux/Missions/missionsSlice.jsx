import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { missionsURL } from "../../utils/constant";

const initialState = {
  missions: []
};

export const getMissions = createAsyncThunk("missions/getMissions", () => {
  return axios.get(missionsURL)
    .then(response => response.data)
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    join: (state, action) => {
      state.missions = state.missions.map(mission => {
        if(mission.mission_id !== action.payload) 
          return mission;
        return { ...mission, reserved: true };
      });
    }
  },
  extraReducers: {
    [getMissions.fulfilled]: (state, action) => {
      if(state.missions.length === 0) {
        state.missions = action.payload;
      }
    }
  }
});

export const { join } = missionsSlice.actions;

export default missionsSlice.reducer;