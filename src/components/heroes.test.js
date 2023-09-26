/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Heroes from './Heroes';

const mockStore = configureMockStore([]);

describe('Heroes component works okay', () => {
  test('Hero renders correctly', () => {
    const store = mockStore({
      heroes: {
        heroes: [],
      },
    });

    const tree = render(
      <Provider store={store}>
        <Heroes />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
