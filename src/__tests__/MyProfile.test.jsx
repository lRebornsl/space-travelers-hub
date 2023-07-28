import { render, waitFor } from '@testing-library/react';
import { beforeEach, describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import MyProfile from '../components/MyProfile/MyProfile';

describe('My Profile', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>
    );
  });

  it('My Profile renders correctly', async () => {
    await waitFor(() => expect(MyProfile).toMatchSnapshot());
  });
});