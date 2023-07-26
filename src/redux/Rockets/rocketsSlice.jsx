import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { URL } from '../../utils/constant';

const FETCH_ROCKETS = 'rocketStore/rockets/FETCH_ROCKETS';
const RESERVE_ROCKET = 'rocketStore/rockets/RESERVE_ROCKETS';
const CANCEL_RESERVATION = 'rocketStore/rockets/CANCEL_RESERVATIONS';

export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async (post, { dispatch }) => {
  const response = await fetch(URL);
  const data = await response.json();
  const payload = data.map((rocket) => ({
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    description: rocket.description,
    type: rocket.rocket_type,
    image: rocket.flickr_images[0],
    reserved: false,
  }));
  dispatch({
    type: FETCH_ROCKETS,
    payload,
  });
  return payload;
})

export const reserveRocket = (rocketId) => ({
  type: RESERVE_ROCKET,
  payload: rocketId,
});

export const cancelReservation = (rocketId) => ({
  type: CANCEL_RESERVATION,
  payload: rocketId,
})

const initialState = {
  rockets: [],
}

const rocketsSlice = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchRockets.fulfilled, (state, { payload }) => ({
    ...state,
    rockets: [...payload],
    }))
    .addCase(RESERVE_ROCKET, (state, { payload: rocketId }) => ({
      ...state,
      rockets: state.rockets.map((rocket) =>
        rocket.id !== rocketId ? rocket : { ...rocket, reserved: true }
      ),
    }))
    .addCase(CANCEL_RESERVATION, (state, { payload: rocketId }) => ({
      ...state,
      rockets: state.rockets.map((rocket) =>
        rocket.id !== rocketId ? rocket : { ...rocket, reserved: false }
      ),
    }));
})

export default rocketsSlice;