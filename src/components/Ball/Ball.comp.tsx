import React from 'react';

import {Text} from '@components/Text';
import {Wrapper} from './Ball.styles';
import {BallProps} from './Ball.types';

export const Ball: React.FC<BallProps> = props => {
  const {numbers} = props;

  return (
    <Wrapper>
      <Text align="center" fontWeight={'bold'} color={'white'}>
        {numbers}
      </Text>
    </Wrapper>
  );
};
