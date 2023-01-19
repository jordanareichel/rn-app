import {Text} from '@components/Text';
import React from 'react';
import {Wrapper} from './Display.styles';
import {DisplayProps} from './Display.types';

export const Display: React.FC<DisplayProps> = props => {
  const {value} = props;

  return (
    <Wrapper>
      <Text fontSize={40} color={'white'}>
        {value}
      </Text>
    </Wrapper>
  );
};
