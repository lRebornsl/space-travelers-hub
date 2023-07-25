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
  reducers: {},
  extraReducers: {
    [getMissions.fulfilled]: (state, action) => {
      state.missions = action.payload;
    }
  }
});

export default missionsSlice.reducer;