import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Missions from '../components/Missions/Missions';
import { beforeEach, describe, it } from 'vitest';
import { Provider } from 'react-redux';
import { getMissions } from '../redux/Missions/missionsSlice';
import store from '../redux/Store';

describe('Missions', () => {

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>
    );
  });

  it('Missions renders correctly', async () => {
    await waitFor(() => expect(Missions).toMatchSnapshot());
  });

  it('Fetches missions from API', async () => {
    store.dispatch(getMissions());
    await waitFor(() => expect(store.getState().missions.missions).toHaveLength(0));
  });
});