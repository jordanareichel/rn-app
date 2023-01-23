import {theme} from '@styles/theme';
import React from 'react';

import TestRenderer from 'react-test-renderer';
import {ThemeProvider} from 'styled-components/native';
import {Input} from './Input.comp';

describe('Component Input', () => {
  test('renderer currently', () => {
    const tree = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <Input />
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
