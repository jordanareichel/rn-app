import React from 'react';

import TestRenderer from 'react-test-renderer';
import {ThemeProvider} from 'styled-components/native';
import {Random} from './Random.comp';
import {theme} from '@styles/theme';

const RandomComp = props => {
  const minValue = 10;
  const maxValue = 12;

  return <Random {...props} maxValue={maxValue} minValue={minValue} />;
};

describe('Component Random', () => {
  test('renderer currently', () => {
    const tree = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <RandomComp />
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
