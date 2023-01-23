import React from 'react';

import TestRenderer from 'react-test-renderer';
import {ThemeProvider} from 'styled-components/native';
import {Display} from './Display.comp';
import {theme} from '@styles/theme';

const DisplayComp = props => {
  return <Display {...props} />;
};

describe('Component Display', () => {
  test('renderer currently', () => {
    const tree = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <DisplayComp />
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
