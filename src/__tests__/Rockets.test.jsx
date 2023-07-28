import Rockets from '../components/Rockets/Rockets';
import { describe, expect, test } from 'vitest';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import RocketsPage from '../pages/RocketsPage/RocketsPage';
import store from '../redux/Store';

describe('Missions', () => {
  test('Rocket Page renders correctly into the DOM', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <RocketsPage />
        </Provider>
      </MemoryRouter>
    ).toJSON();
    expect(component).toMatchSnapshot();
  })

  test('Rocket cards loads correctly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </MemoryRouter>
    ).toJSON();
    expect(component).toMatchSnapshot();
  })
});