import {Text} from '@components/Text';
import {theme} from '@styles/theme';
import _ from '@utils/object';
import React from 'react';
import {RandomProps} from './Random.types';

export const Random: React.FC<RandomProps> = props => {
  const {minValue, maxValue} = props;

  const random = Math.floor(
    Math.random() * (maxValue - minValue + 1) + minValue,
  );

  return (
    <Text
      fontSize={_.get(theme, 'font.md')}
      color={_.get(theme, 'colors.dark')}
      fontWeight={'bold'}>
      Valor aleatório é {random}
    </Text>
  );
};
