import {theme} from '@styles/theme';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {Paper} from './Paper.comp';
import TestRenderer from 'react-test-renderer';

describe('Paper component', () => {
  test('renders correctly', () => {
    const tree = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <Paper />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
