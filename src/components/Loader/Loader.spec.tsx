import React from 'react';

import TestRenderer from 'react-test-renderer';
import {ThemeProvider} from 'styled-components/native';
import {Loader} from './Loader.comp';
import {theme} from '@styles/theme';

describe('Component Loader', () => {
  test('renderer currently', () => {
    const tree = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <Loader />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
