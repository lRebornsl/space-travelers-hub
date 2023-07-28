import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Rockets from '../components/Rockets/Rockets';
import { describe, expect, test } from 'vitest';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import { MemoryRouter } from 'react-router-dom';

describe('Badge component', () => {
  const mockRocket = {
    name: 'Falcon 9',
    description: 'A two-stage orbital launch vehicle.',
    reserved: false,
  };

  test('renders rocket name and description correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Rockets rocket={mockRocket} />
        </Provider>
      </MemoryRouter>
    );
    const nameElement = getByText(mockRocket.name);
    const descriptionElement = getByText(mockRocket.description);
    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders "Reserved Rocket" button if rocket is not reserved', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Rockets rocket={mockRocket} />
        </Provider>
      </MemoryRouter>
    );
    const reserveButton = getByText('Reserve Rocket');
    expect(reserveButton).toBeInTheDocument();
  })
})