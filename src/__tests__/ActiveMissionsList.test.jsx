import React from 'react';
import { getByText, render, waitFor } from '@testing-library/react';
import ActiveMissionsList from '../components/Missions/ActiveMissionsList';
import { beforeEach, describe, it } from 'vitest';
import { Provider } from 'react-redux';
import store from '../redux/Store';

describe('Active Missions List', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ActiveMissionsList />
      </Provider>
    );
  });

  it('ActiveMissionsList renders correctly', async () => {
    await waitFor(() => expect(ActiveMissionsList).toMatchSnapshot());
  });

  it('Should show "no active missions"', async () => {
    const { findAllByText } = render(
      <Provider store={store}>
        <ActiveMissionsList />
      </Provider>
    );
    await waitFor(() => expect(findAllByText('No active missions yet.')).toBeTruthy());
  });
});