import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { URL } from '../../utils/constant';

const FETCH_ROCKETS = 'rocketStore/rockets/FETCH_ROCKETS';

export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async (post, { dispatch }) => {
  const response = await fetch(URL);
  const data = await response.json();
  const payload = data.map((rocket) => ({
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    description: rocket.description,
    type: rocket.rocket_type,
    image: rocket.flickr_images[0],
  }));
  dispatch({
    type: FETCH_ROCKETS,
    payload,
  });
  return payload;
})

const initialState = {
  rockets: [],
}

const rocketsSlice = createReducer(initialState, (builder) => {
  builder.addCase(fetchRockets.fulfilled, (state, { payload }) => ({
    ...state,
    rockets: [...payload],
  }));
})

export default rocketsSlice;