import React from 'react';

import TestRenderer from 'react-test-renderer';
import {ThemeProvider} from 'styled-components/native';
import {Text} from './Text.comp';
import {theme} from '@styles/theme';

describe('Component Text', () => {
  test('renders correctly', () => {
    const tree = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <Text fontSize={18} fontWeight="bold">
          This is the Text
        </Text>
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
