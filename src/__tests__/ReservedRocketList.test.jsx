import { render, waitFor } from '@testing-library/react';
import ReservedRocketsList from '../components/Rockets/ReservedRocketsList';
import { beforeEach, describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import store from '../redux/Store';

describe('Active Missions List', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ReservedRocketsList />
      </Provider>
    );
  });

  it('ReservedRocketsList renders correctly', async () => {
    await waitFor(() => expect(ReservedRocketsList).toMatchSnapshot());
  });

  it('Should show "no active missions"', async () => {
    const { findAllByText } = render(
      <Provider store={store}>
        <ReservedRocketsList />
      </Provider>
    );
    await waitFor(() => expect(findAllByText('No active missions yet.')).toBeTruthy());
  });
});