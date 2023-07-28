import { render, waitFor } from '@testing-library/react';
import Header from '../components/Header/Header';
import { beforeEach, describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import { BrowserRouter as Router } from 'react-router-dom';

global.mockUseLocation = { pathname: '/' };

describe('Header', () => {
  beforeEach(() => {
    global.useLocation = () => global.mockUseLocation;

    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
  });

  it('Header renders correctly', async () => {
    await waitFor(() => expect(Header).toMatchSnapshot());
  });
});