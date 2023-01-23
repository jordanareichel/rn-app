import React, {useState} from 'react';

import TestRenderer from 'react-test-renderer';
import {ThemeProvider} from 'styled-components/native';
import {Mega} from './Mega.comp';
import {theme} from '@styles/theme';

const MegaComp = props => {
  const [value, setValue] = useState(0);

  return (
    <Mega
      {...props}
      quantity={value}
      onChangeValue={e => setValue(e)}
      onPress={() => console.log('')}
    />
  );
};

describe('Component Mega', () => {
  test('renderer currently', () => {
    const tree = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <MegaComp />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
